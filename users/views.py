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
from .models import UserCourse, Notification, UserCoursePage, PromoCode, UserPromoCode, UserClickNotification, ReportUser
from .serializers import CourseOpenSerializer, UserOpenCourseSerializer, ReturnLessonsSerializer, NotificationSerializer, ReturnUserSerializer
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from rest_framework.exceptions import NotFound, APIException
import docker
from paypalrestsdk import Payment
import paypalrestsdk
from courses.models import Course
from cryptography.fernet import Fernet
from nautillus.settings import FERNET_KEY
from datetime import timedelta
from djoser.views import UserViewSet
import requests
from .permissions import IsNotBanned

User = get_user_model()

class ActivationEmail(email.ActivationEmail):
    template_name = 'activateEmail.html'

class ActivationEmailConfirmation(email.ConfirmationEmail):
    template_name = 'activateEmailConfirmation.html'

class ChangeEmailConfirmation(email.ConfirmationEmail):
    template_name = 'emailChanged.html'

class ResetPasswordConfirmationEmail(email.PasswordChangedConfirmationEmail):
    template_name = 'resetPass.html'

class ResetPasswordEmail(email.PasswordResetEmail):
    template_name = 'passwordReset.html'


class BlacklistTokenUpdateView(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            refresh_token_validation = RefreshToken(refresh_token)
            refresh_token_validation.blacklist()
            return Response("token got blacklisted", status=status.HTTP_205_RESET_CONTENT)
        except Exception as error:
            return Response(f"error: {error}", status=status.HTTP_400_BAD_REQUEST)


class RemoveExpiredTokens(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

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
        

class CustomUserCreateView(UserViewSet):
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Add your custom validation logic here
        if not serializer.validated_data['user_name'].isalnum():
            return Response({"user_name": "Username must contain only letters and numbers."}, status=status.HTTP_400_BAD_REQUEST)
        
        elif not serializer.validated_data['user_name'].isascii():
            return Response({"user_name": "Username must contain only English letters."}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class CustomChangeUsernameView(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):
        user = User.objects.filter(user_name=request.user.user_name)[0]

        serializer = ReturnUserSerializer(user)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            new_user_name = request.data['new_user_name']
            user = User.objects.filter(user_name=request.user.user_name)[0]

            if not new_user_name.isalnum():
                return Response({"user_name": "Username must contain only letters and numbers."}, status=status.HTTP_400_BAD_REQUEST)
            
            elif not new_user_name.isascii():
                return Response({"user_name": "Username must contain only English letters."}, status=status.HTTP_400_BAD_REQUEST)
            
            user.user_name = new_user_name
            user.save()

            return Response({"user_name": "user_name successfully changed"}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        
# ara activirebuli useris loginis dros sxva errori minda daartyas da passwordis erroric sxvaa
# arsebobs tu ara email tu arsebobs shevamowmot password tu sworia yvelaferi mara is_active false davwer gaaaqtiuros acc 
# shemilia error cvladi calke shevqmna dictionary da iq iyos qartuli da 
# inglisuri errorebi tengo gamomigzavnis ra enaze aq users da imis mixedvit daabrunebs 
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

                        
                if existing_tokens.count() > token_limit:
                    response['error'] = 'Maximum different log in count reached.'
                    return Response(response, status=status.HTTP_403_FORBIDDEN)

                else:
                    return Response({'tokens': super().post(request, *args, **kwargs).data, 'response': response})
            
            else:
                return Response({'error': 'Email or Password is wrong'}, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as error:

            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class CourseOpenView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]
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
                chosenCourse = userCourses.filter(course=purchased_course)[0]
                chosenCourse.opened_at = timezone.datetime.now()
                chosenCourse.save()

                course = CourseGroup.objects.filter(keyword=self.kwargs.get('pk'))

                user_course_page = UserCoursePage.objects.filter(user=user, course=purchased_course)
                if user_course_page:
                    user_course_page[0].page = self.request.GET.get('page')
                    user_course_page[0].save()

                else:
                    UserCoursePage.objects.create(user=user, course=purchased_course, page=self.request.GET.get('page'))
                
                return course
            else:
                raise NotFound(detail=f'you do not have this course')
        
        except Exception as error:

            raise NotFound(detail=f'{error}')
        

# class ReturnLessonImage(views.APIView):
#     permission_classes = [permissions.AllowAny]

#     def post(self, request):
#         lesson = CourseGroup.objects.filter(title=request.data["lesson"])[0]
#         lesson_image = CourseGroupImage.objects.filter(course=lesson)[0]

#         return HttpResponse(lesson_image.image, content_type="image/png")

        
class ReturnLastUserCoursePage(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request, title):
        try:
            user = request.user
            course = Course.objects.filter(title=title)[0]

            user_course_page = UserCoursePage.objects.filter(user=user, course=course)
            if user_course_page:
                return Response({'page': user_course_page[0].page}, status=status.HTTP_200_OK)
            
            else:
                return Response({'page': 1}, status=status.HTTP_200_OK)
            
        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class UserCoursesList(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):
        user = request.user 
        sorted_courses = UserCourse.objects.filter(user=user).order_by('-opened_at')
        serializer = CourseOpenSerializer(sorted_courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReturnLessons(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request, course_name):
        chosenCourse = CourseGroup.objects.filter(keyword=course_name)
        serializer = ReturnLessonsSerializer(chosenCourse, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ExecuteCodeAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

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
                command=['timeout', '10s', 'python', '-c', user_code],
                remove=True,
                mem_limit='6m',
                cpu_period=10000,
                cpu_quota=5000
            )

            if language == 'C++':
                container = client.containers.run(
                'gcc:latest',
                command=['timeout', '10s', 'sh', '-c', f'echo \'{user_code}\' > main.cpp && g++ -o main main.cpp && ./main'],
                remove=True
            )

            if language == 'Ruby':
                container = client.containers.run(
                'ruby:latest',
                command=['timeout', '10s', 'ruby', '-e', user_code],
                remove=True
            )
                
            # if language == 'Ubuntu':
            #     container = client.containers.run(
            #     'ubuntu:latest',
            #     command=user_code,
            #     remove=True
            # )

            output = container.decode('utf-8')
            
            if output == '':
                return Response({'error': 'no output'}, status=status.HTTP_400_BAD_REQUEST) 
            
            return Response({'output': output}, status=status.HTTP_200_OK) 


        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class ChangeProfilePicture(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        print(request.META.get('REMOTE_ADDR'))
        pfp_number = request.data['pfp_number']
        user = request.user
        user.profile_picture = pfp_number
        user.save()
        return Response({'pfp_number': user.profile_picture}, status=status.HTTP_200_OK) 
    

class PayPalPaymentAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        promo_code = request.data['promo_code']
        course = Course.objects.filter(title=request.data['title'])[0]
        user = User.objects.filter(user_name=request.user.user_name)[0]

        # ip = request.META.get('REMOTE_ADDR')
        # url = f"https://api.iplocation.net/?ip={ip}"
        # request_data = requests.get(url=url)
        # country_name = request_data.json()["country_name"]

        # if country_name == "Georgia":
        #     course_price = course.price_geo
        # else:
        #     course_price = course.price


        if UserCourse.objects.filter(user=user, course=course):
            return Response({'error': 'this course is already purchased'}, status=status.HTTP_400_BAD_REQUEST)
        
        else:
            if course_price == 0.00:
                UserCourse.objects.create(user=user, course=course)
                return Response({'link': 'https://nautillus.org/courses/info/Python'}, status=status.HTTP_200_OK)

            elif PromoCode.objects.filter(promo_code=promo_code.lower()):
                promo_code_object = PromoCode.objects.filter(promo_code=promo_code.lower())[0]
                
                if UserPromoCode.objects.filter(user=user, promo_code=promo_code_object) or UserPromoCode.objects.filter(promo_code=promo_code_object).count() >= promo_code_object.people:
                    print("promo code is unavailable")
                else:
                    print("promo code is available")
                    course_price = round(float(course.price) - float(course.price) * promo_code_object.sale / 100, 2)

            # paypalrestsdk.configure({
            #     "mode": "sandbox", # sandbox or live
            #     "client_id": "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
            #     "client_secret": "EA1tf4Uk8iEWt24i2cIOYnNa4gl82SVuxQ6g0hXSEOK1BVTzGP-SSloegncN78yDamthz2QqSjvHjV6V" 
            #     })
            paypalrestsdk.configure({
                "mode": "live", # sandbox or live
                "client_id": "ARx4gN3fHvLP0Tzme9Djm-W_0wjrPkyAyEuIETowB6DeyfA2x_bouwt75DJqn6TTSYe1CQwN-4K7xv0x",
                "client_secret": "ENnEy5gTzIO31r3Q6PAWkaivdpLE2AXTXrNF0wUekW1ieipcodHxxcx47H69r_v34tg7BUKvb16HZvcl" 
            })
            
            key = FERNET_KEY
            fernet = Fernet(key)
            encrypted_course_id = fernet.encrypt(str(course.id).encode()).decode()
            encrypted_promocode = fernet.encrypt(str(promo_code).encode()).decode()
            print(course_price)
            paypal_payment = Payment({
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": f"http://localhost:5173/payment/execute/{encrypted_course_id}/{encrypted_promocode}",
                    "cancel_url": "yourdomain.com/payment/cancel/"
                },
                "transactions": [
                    {
                        "amount": {
                            "total": f"{course_price}",  # Replace with your payment amount
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
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        # paypalrestsdk.configure({
        #     "mode": "sandbox", # sandbox or live
        #     "client_id": "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
        #     "client_secret": "EA1tf4Uk8iEWt24i2cIOYnNa4gl82SVuxQ6g0hXSEOK1BVTzGP-SSloegncN78yDamthz2QqSjvHjV6V" 
        #     })
        paypalrestsdk.configure({
            "mode": "live", # sandbox or live
            "client_id": "ARx4gN3fHvLP0Tzme9Djm-W_0wjrPkyAyEuIETowB6DeyfA2x_bouwt75DJqn6TTSYe1CQwN-4K7xv0x",
            "client_secret": "ENnEy5gTzIO31r3Q6PAWkaivdpLE2AXTXrNF0wUekW1ieipcodHxxcx47H69r_v34tg7BUKvb16HZvcl" 
            })
        
        payment_id = request.data['payment_id']
        payer_id = request.data['payer_id']

        key = FERNET_KEY
        fernet = Fernet(key)

        encrypted_promo_code = request.data['promo_code']

        decrypted_promo_code = fernet.decrypt(encrypted_promo_code).decode()

        encrypted_course_id = request.data["course_id"]
        decrypted_course_id = int(fernet.decrypt(encrypted_course_id).decode())
        course = Course.objects.filter(id=decrypted_course_id)[0]

        payment = Payment.find(payment_id)
        if payment.execute({"payer_id": payer_id}):
            user = User.objects.filter(user_name=request.user.user_name)[0]
            
            if PromoCode.objects.filter(promo_code=decrypted_promo_code.lower()):
                promo_code_object = PromoCode.objects.filter(promo_code=decrypted_promo_code.lower())[0]
                
                if UserPromoCode.objects.filter(user=user, promo_code=promo_code_object) or UserPromoCode.objects.filter(promo_code=promo_code_object).count() >= promo_code_object.people:
                    print("promo code is unavailable in exec")
                else:
                    print("promo code is available in exec")
                    UserPromoCode.objects.create(user=user, promo_code=promo_code_object)

            UserCourse.objects.create(user=user, course=course)
            
            return Response({'success': 'Payment executed successfully'})
        else:
            return Response({'error': 'Payment execution failed'}, status=status.HTTP_400_BAD_REQUEST)
        

class ReturnNotifications(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):
        date = timezone.now() - timedelta(days=7)
        last_7_days_notifications = Notification.objects.filter(date_created__gte=date).order_by('-date_created')
        serializer = NotificationSerializer(last_7_days_notifications, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ReturnUserClickedNotifications(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):
        try:
            user = User.objects.filter(user_name=request.user.user_name)[0]
            clicked = False
            user_click = UserClickNotification.objects.filter(user=user)
            if user_click:
                user_click_time = user_click[0].date_created
                last_notification = Notification.objects.last()

                if user_click_time < last_notification.date_created:
                    clicked = False
                elif user_click_time > last_notification.date_created:
                    clicked = True
            
            return Response({"clicked": clicked}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        
    
class UserSeeNotifications(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):

        user = User.objects.filter(user_name=request.user.user_name)[0]

        user_click = UserClickNotification.objects.filter(user=user)
        if user_click:
            user_click[0].date_created = timezone.now()
            user_click[0].save()

        else:
            UserClickNotification.objects.create(user=user)
        
        return Response({"click": 'successfully clicked'}, status=status.HTTP_200_OK)
        

class CheckUserPromoCode(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        promo_code = request.data['promo_code']

        try:
            promo_code_object = PromoCode.objects.filter(promo_code=promo_code)[0]
            user = User.objects.filter(user_name=request.user.user_name)[0]

            if UserPromoCode.objects.filter(user=user, promo_code=promo_code_object) or UserPromoCode.objects.filter(promo_code=promo_code_object).count() >= promo_code_object.people:
                return Response({"output": False}, status=status.HTTP_200_OK)
            else:
                course = Course.objects.filter(title=request.data['course_title'])[0]
                saled_price = float(course.price) - float(course.price) * promo_code_object.sale / 100
                return Response({"output": round(saled_price, 2)}, status=status.HTTP_200_OK)

        except:
            return Response({'output': False}, status=status.HTTP_200_OK)   


class DeleteUnactiveUsers(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):
        try:
            deleted = False
            today = timezone.now()
            seven_day_before = today - timedelta(days=7)
            last_7_days_unactive_users = User.objects.filter(start_date__lte=seven_day_before)
            print(last_7_days_unactive_users)
            for user in last_7_days_unactive_users:
                if user.is_active == False:
                    deleted = True
                    user.delete()
            if deleted:
                return Response({'error': f'unactive users deleted successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': f'no unactive users'}, status=status.HTTP_200_OK)

        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class GetUserIPLocation(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        ip = request.META.get('REMOTE_ADDR')
        url = f"https://api.iplocation.net/?ip={ip}"
        request_data = requests.get(url=url)
        return Response({'county_name': request_data.json()["country_name"]}, status=status.HTTP_200_OK)
    

class UserReporting(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        try:
            reporter = User.objects.filter(user_name=request.user.user_name)[0]
            reported = User.objects.filter(user_name=request.data['reported'])[0]
            cause = request.data['message']

            if len(cause) == 0:
                return Response({'error': 'message is required'}, status=status.HTTP_400_BAD_REQUEST)

            ReportUser.objects.create(reporter=reporter, reported=reported, cause=cause)

            return Response({'message': 'successfully reported'}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)     


# jwt/refresh is dros bazashi useri ar chans
