from typing import Any
from rest_framework.response import Response
from rest_framework import views, generics, permissions, status
# from .serializers import RegisterUserSerializer
from djoser import email
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
from django.utils import timezone
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.views import TokenObtainPairView
from courses.models import CourseGroup
from .models import UserCourse
from .serializers import CourseOpenSerializer, UserOpenCourseSerializer, ReturnLessonsSerializer
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from rest_framework.exceptions import NotFound, APIException
import docker
from paypalrestsdk import Payment
import paypalrestsdk
from courses.models import Course
from cryptography.fernet import Fernet
from nautillus.settings import FERNET_KEY


User = get_user_model()

class ActivationEmail(email.ActivationEmail):
    template_name = 'activateEmail.html'

class ResetPasswordEmail(email.PasswordResetEmail):
    template_name = 'resetPass.html'

class BlacklistTokenUpdateView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            refresh_token_validation = RefreshToken(refresh_token)
            refresh_token_validation.blacklist()
            return Response("token got blacklisted", status=status.HTTP_205_RESET_CONTENT)
        except Exception as error:
            return Response(f"error: {error}", status=status.HTTP_400_BAD_REQUEST)


class RemoveExpiredTokens(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request):
        try:
            expired_tokens = OutstandingToken.objects.filter(expires_at__lt=timezone.now(), user=request.user)
            if expired_tokens:
                expired_tokens.delete()

                return Response({'message': 'Expired tokens deleted'})
            else:
                return Response({'message': 'No expired tokens'})
            
        except Exception as error:

            return Response({'error': f'{error}'})
        
class CustomTokenCreateView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
        
    def post(self, request, *args, **kwargs):
        token_limit = 5
        response = {
            'expired tokens': 'not deleted',
            'error': 'None',
            'blacklisted tokens': 'not deleted'
        }

        try:
            
            if User.objects.filter(email=request.data['email']) and request.data['password']:
                user = User.objects.filter(email=request.data['email'])[0]
                expired_tokens = OutstandingToken.objects.filter(expires_at__lt=timezone.now(), user=user)
                
                if expired_tokens:
                    expired_tokens.delete()
                    response['expired tokens'] = 'deleted'
                
                existing_tokens = OutstandingToken.objects.filter(user=user)
                for existing_token in existing_tokens:
                    if BlacklistedToken.objects.filter(token=existing_token):
                        existing_token.delete()
                        response['blacklisted tokens'] = 'deleted'

                        
                if existing_tokens.count() >= token_limit:
                    response['error'] = 'Maximum token limit reached.'
                    return Response(response, status=status.HTTP_403_FORBIDDEN)

                else:
                    return Response({'tokens': super().post(request, *args, **kwargs).data, 'response': response})
            
            else:
                return Response({'error': 'Email or Password is worng'}, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as error:

            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class CourseOpenView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCourse.objects.all()
    pagination_class = PageNumberPagination
    pagination_class.page_size = 1
    serializer_class = UserOpenCourseSerializer
    
    def get_queryset(self):
        try:
            user = self.request.user 
            purchased_course = Course.objects.filter(title=self.kwargs.get('pk'))[0]

            # save opend time
            userCourses = UserCourse.objects.filter(user=user, course=purchased_course)
            if userCourses:
                chosenCourse = userCourses.filter(title=self.kwargs.get('pk'))[0]
                chosenCourse.opened_at = timezone.datetime.now()
                chosenCourse.save()

                course = CourseGroup.objects.filter(title__contains=self.kwargs.get('pk'))
                
                return course
            else:
                raise NotFound(detail=f'you do not have this course')
        
        except Exception as error:

            raise NotFound(detail=f'{error}')


class UserCoursesList(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user 
        sorted_courses = UserCourse.objects.filter(user=user).order_by('-opened_at')
        serializer = CourseOpenSerializer(sorted_courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReturnLessons(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, course_name):
        chosenCourse = CourseGroup.objects.filter(title__contains=course_name)
        serializer = ReturnLessonsSerializer(chosenCourse, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ExecuteCodeAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user_code = request.data.get('code')
            language = request.data.get('language')

            if not user_code:
                return Response({'error': 'No code provided'}, status=status.HTTP_400_BAD_REQUEST)
            
            if (user_code.__contains__('import os') 
                or user_code.__contains__("import pty")
                or user_code.__contains__("import time")
                or user_code.__contains__('#include <cstdlib>') 
                or user_code.__contains__('#include <filesystem>') 
                or user_code.__contains__('#include <stdlib.h>') 
                or user_code.__contains__('system') 
                or user_code.__contains__('sleep') 
                or user_code.__contains__("require 'open3'") 
                or user_code.__contains__('require "open3"')
                or user_code.__contains__('exec')
                or user_code.__contains__('spawn')):

                return Response({'error': 'activity not allowed!'}, status=status.HTTP_400_BAD_REQUEST)

            client = docker.from_env()

            if  language == 'Python':
                container = client.containers.run(
                'python:latest',
                command=['python', '-c', user_code],
                remove=True
            )

            if language == 'C++':
                container = client.containers.run(
                'gcc:latest',
                command=['sh', '-c', f'echo \'{user_code}\' > main.cpp && g++ -o main main.cpp && ./main'],
                remove=True
            )

            if language == 'Ruby':
                container = client.containers.run(
                'ruby:latest',
                command=['ruby', '-e', user_code],
                remove=True
            )

            output = container.decode('utf-8')
            
            if output == '':
                return Response({'error': 'process time outed'}, status=status.HTTP_400_BAD_REQUEST) 
            
            return Response({'output': output}, status=status.HTTP_200_OK) 


        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class ChangeProfilePicture(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        pfp_number = request.data['pfp_number']
        user = request.user
        user.profile_picture = pfp_number
        user.save()
        return Response({'pfp_number': user.profile_picture}, status=status.HTTP_200_OK) 
    

class PayPalPaymentAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        course = Course.objects.filter(title=request.data['title'])[0]
        user = User.objects.filter(user_name=request.user.user_name)[0]

        if UserCourse.objects.filter(user=user, course=course):
            return Response({'error': 'this course is already purchased'}, status=status.HTTP_400_BAD_REQUEST)
        
        else:
            paypalrestsdk.configure({
                "mode": "sandbox", # sandbox or live
                "client_id": "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
                "client_secret": "EA1tf4Uk8iEWt24i2cIOYnNa4gl82SVuxQ6g0hXSEOK1BVTzGP-SSloegncN78yDamthz2QqSjvHjV6V" 
                })
            
            key = FERNET_KEY
            fernet = Fernet(key)
            encrypted_course_id = fernet.encrypt(str(course.id).encode()).decode()

            paypal_payment = Payment({
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": f"http://localhost:5173/payment/execute/{encrypted_course_id}",
                    "cancel_url": "yourdomain.com/payment/cancel/"
                },
                "transactions": [
                    {
                        "amount": {
                            "total": f"{course.price}",  # Replace with your payment amount
                            "currency": "USD"  # Replace with your currency code
                        },
                        "description": "Example payment description"
                    }
                ]
            })

            # Create the payment
            if paypal_payment.create():
                # Get the approval URL to redirect the user to PayPal
                approval_url = next(link.href for link in paypal_payment.links if link.rel == 'approval_url')
                return Response({'link': approval_url}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'Payment creation failed'}, status=status.HTTP_400_BAD_REQUEST)


class PayPalExecuteAPIView(PayPalPaymentAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        paypalrestsdk.configure({
            "mode": "sandbox", # sandbox or live
            "client_id": "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
            "client_secret": "EA1tf4Uk8iEWt24i2cIOYnNa4gl82SVuxQ6g0hXSEOK1BVTzGP-SSloegncN78yDamthz2QqSjvHjV6V" 
            })
        
        payment_id = request.data['payment_id']
        payer_id = request.data['payer_id']

        encrypted_course_id = request.data["course_id"]
        key = FERNET_KEY
        fernet = Fernet(key)
        decrypted_course_id = int(fernet.decrypt(encrypted_course_id).decode())
        course = Course.objects.filter(id=decrypted_course_id)[0]

        payment = Payment.find(payment_id)
        if payment.execute({"payer_id": payer_id}):
            user = User.objects.filter(user_name=request.user.user_name)[0]
            UserCourse.objects.create(user=user, course=course)
            
            return Response({'success': 'Payment executed successfully'})
        else:
            return Response({'error': 'Payment execution failed'}, status=status.HTTP_400_BAD_REQUEST)



# jwt/refresh is dros bazashi useri ar chans


