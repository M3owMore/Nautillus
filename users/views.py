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
from .models import UserCourse, Notification, UserCoursePage, PromoCode, UserPromoCode, UserClickNotification, ReportUser, UserBundleCourse, UserActivityLog, UserIp
from .serializers import CourseOpenSerializer, UserOpenCourseSerializer, ReturnLessonsSerializer, NotificationSerializer, ReturnUserSerializer
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from rest_framework.exceptions import NotFound, APIException
import docker
from paypalrestsdk import Payment
import paypalrestsdk
from courses.models import Course, CourseBundle
from cryptography.fernet import Fernet
from nautillus.settings import FERNET_KEY
from datetime import timedelta
from djoser.views import UserViewSet
import requests
from .permissions import IsNotBanned
import re
from chat.models import Room
from decimal import Decimal
from datetime import date
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

User = get_user_model()

class ActivationEmail(email.ActivationEmail):
    template_name = 'activateEmail.html'

    def send(self, *args, **kwargs):
        user = kwargs.get('user')
        language = self.request.data.get('locale', 'en')

        activation_url = f'http://localhost:5173/{language}/user/activation?uid={kwargs.get("uid")}&token={kwargs.get("token")}'

        context = {
            'user': user,
            'activation_url': activation_url,
            'site_name': 'nautillus.org'
        }

        subject = 'Account activation nautillus.org'
        message = render_to_string(self.template_name, context)
        email = EmailMessage(subject, message, to=[self.request.data.get('email')])   
        email.content_subtype = 'html'  # Specify that the content is HTML
        email.send()

class ActivationEmailConfirmation(email.ConfirmationEmail):
    template_name = 'activateEmailConfirmation.html'

class ChangeEmailConfirmation(email.ConfirmationEmail):
    template_name = 'emailChanged.html'

class ResetPasswordConfirmationEmail(email.PasswordChangedConfirmationEmail):
    template_name = 'resetPass.html'

class ResetPasswordEmail(email.PasswordResetEmail):
    template_name = 'passwordReset.html'

    def send(self, *args, **kwargs):
        user = kwargs.get('user')
        language = self.request.data.get('locale', 'en')
        print(language)
        reset_url = f'http://localhost:5173/{language}/user/forgotpass?uid={kwargs.get("uid")}&token={kwargs.get("token")}'

        context = {
            'user': user,
            'reset_url': reset_url,
            'site_name': 'nautillus.org'
        }

        subject = 'Password reset on nautillus.org'
        message = render_to_string(self.template_name, context)
        email = EmailMessage(subject, message, to=[self.request.data.get('email')])   
        email.content_subtype = 'html'  # Specify that the content is HTML
        email.send()


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
        
        
def has_symbol_or_number(input_string):
    pattern = re.compile(r'[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]')
    return bool(pattern.search(input_string))

class CustomUserCreateView(UserViewSet):
    
    def create(self, request, *args, **kwargs):
        # Make a mutable copy of the request data
        data = request.data.copy()

        if data['email'].strip() == '':
            if data['lang'] == 'ge':
                return Response({"error": "ელ-ფოსტის სექცია ცარიელია"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "email address section is empty"}, status=status.HTTP_400_BAD_REQUEST)
        
        elif data['user_name'].strip() == '':
            if data['lang'] == 'ge':
                return Response({"error": "სახელის სექცია ცარიელია"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "username section is empty"}, status=status.HTTP_400_BAD_REQUEST)

        elif data['password'].strip() == '':
            if data['lang'] == 'ge':
                return Response({"error": "პაროლის სექცია ცარიელია"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "password section is empty"}, status=status.HTTP_400_BAD_REQUEST)

        elif data['re_password'].strip() == '':
            if data['lang'] == 'ge':
                return Response({"error": "გაიმეორეთ პაროლის სექცია ცარიელია"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "repeat password section is empty"}, status=status.HTTP_400_BAD_REQUEST)

        elif User.objects.filter(email=data['email'].lower()).exists():
            if data['lang'] == 'ge':
                return Response({"error": "მომხმარებელი ამ ელ-ფოსტით უკვე არსებობს"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "User with this email address already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        elif User.objects.filter(user_name=data['user_name']).exists():
            if data['lang'] == 'ge':
                return Response({"error": "მომხმარებელი ამ სახელით უკვე არსებობს"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "User with this username already exists"}, status=status.HTTP_400_BAD_REQUEST)

        elif len(data['password']) < 8:
            if data['lang'] == 'ge':
                return Response({"error": "პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "Password should be at least 8 symbols"}, status=status.HTTP_400_BAD_REQUEST)

        elif not has_symbol_or_number(data['password']):
            if data['lang'] == 'ge':
                return Response({"error": "პაროლი უნდა შეიცავდეს მინიმუმ 1 სიმბოლოს ან რიცხვს"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "Password should contain at least 1 symbol or number"}, status=status.HTTP_400_BAD_REQUEST)
        
        elif data['password'] != data['re_password']:
            if data['lang'] == 'ge':
                return Response({"error": "პაროლის სექციები არ ემთხვევა"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "Password sections does not match"}, status=status.HTTP_400_BAD_REQUEST)
        

        data['email'] = data['email'].lower()

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)

        if not serializer.validated_data['user_name'].isalnum():
            if data['lang'] == 'ge':
                return Response({"error": "სახელი უნდა შეიცავდეს მხოლოდ ასოებს და ციფრებს"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "Username must contain only letters and numbers."}, status=status.HTTP_400_BAD_REQUEST)
        
        elif not serializer.validated_data['user_name'].isascii():
            if data['lang'] == 'ge':
                return Response({"error": "სახელი უნდა შეიცავდეს მხოლოდ ინგლისურ ასოებს"}, status=status.HTTP_400_BAD_REQUEST)
            
            return Response({"error": "Username must contain only English letters."}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class CustomUsernamePfpAboutChange(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def get(self, request):
        user = User.objects.filter(user_name=request.user.user_name)[0]

        # check and save ip of the user
        ip = request.META.get('REMOTE_ADDR')
        
        user_ip = UserIp.objects.filter(user=user, ip=ip)
        if not user_ip:
            UserIp.objects.create(user=user, ip=ip)

        if UserActivityLog.objects.filter(user=user):
            if UserActivityLog.objects.filter(user=user).last().date_created != date.today():
                UserActivityLog.objects.create(user=user, activity_level=1)
        else:
            UserActivityLog.objects.create(user=user, activity_level=1)

        activity_list = [0] * 250

        for user_activity in UserActivityLog.objects.filter(user=user).order_by('-date_created'):
            index = date.today() - user_activity.date_created

            if index.days >= 250:
                break

            activity_list[int(index.days)] = user_activity.activity_level

        serializer = ReturnUserSerializer(user)

        return Response({'user': serializer.data, 'activity_graph': activity_list}, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            new_user_name = request.data['new_user_name']
            pfp_number = request.data['pfp_number']
            about = request.data['about']
            user = User.objects.filter(user_name=request.user.user_name)[0]

            user.profile_picture = pfp_number
            user.save()

            user.about = about
            user.save()


            if not new_user_name.isalnum():
                return Response({"user_name": "Username must contain only letters and numbers."}, status=status.HTTP_400_BAD_REQUEST)
            
            elif not new_user_name.isascii():
                return Response({"user_name": "Username must contain only English letters."}, status=status.HTTP_400_BAD_REQUEST)
            
            elif User.objects.filter(user_name=new_user_name) and user.user_name != new_user_name:
                return Response({"user_name": "Username is already in use"}, status=status.HTTP_400_BAD_REQUEST)

            all_rooms = Room.objects.filter(accessed_users=user)
            for room in all_rooms:
                seperated_room_name = room.name.split('_')

                if seperated_room_name[1] == user.user_name:
                    seperated_room_name[1] = new_user_name

                elif seperated_room_name[2] == user.user_name:
                    seperated_room_name[2] = new_user_name
                
                room_name = ''
                for name in seperated_room_name:
                    room_name += name + '_'
                
                new_room_name = room_name[:-1]
                
                room.name = new_room_name
                room.save()

            user.user_name = new_user_name
            user.save()

            return Response({"details": "user_name, pfp and about me successfully changed"}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        

class CustomTokenCreateView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
        
    def post(self, request, *args, **kwargs):
        token_limit = 5
        response = {
            'expired tokens': 'not deleted',
            'error': 'None',
            'blacklisted tokens': 'not deleted'
        }

        errors = {
            "password_error": "Password is wrong",
            "password_error_geo": "პაროლი არასწორია",

            "email_error": 'Email is wrong',
            "email_error_geo": 'ელ-ფოსტა არასწორია',

            'activation_error': 'User is not activated, please click "Resend activation" button below',
            'activation_error_geo': 'მომხმარებელი არ არის აქტივირებული, გთხოვთ დააკლიკეთ "აქტივაციის თავიდან გამოგზავნა"-ს დაბლა'
        }

        try:
            
            if User.objects.filter(email=request.data['email'].lower()):
                user = User.objects.filter(email=request.data['email'].lower())[0]

                if not user.check_password(request.data['password']):
                    if request.data['lang'] == "ge":
                        return Response({'error': errors['password_error_geo']}, status=status.HTTP_400_BAD_REQUEST)
                    
                    return Response({'error': errors['password_error']}, status=status.HTTP_400_BAD_REQUEST)
                
                elif not user.is_active:
                    if request.data['lang'] == "ge":
                        return Response({'error': errors['activation_error_geo']}, status=status.HTTP_400_BAD_REQUEST)
                    
                    return Response({'error': errors['activation_error']}, status=status.HTTP_400_BAD_REQUEST)
                
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
                    request.data["email"] = request.data["email"].lower()
                    return Response({'tokens': super().post(request, *args, **kwargs).data, 'response': response})  
                       
            else:
                if request.data['lang'] == "ge":
                    return Response({'error': errors['email_error_geo']}, status=status.HTTP_400_BAD_REQUEST)
                
                return Response({'error': errors['email_error']}, status=status.HTTP_400_BAD_REQUEST)
            
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

            if UserActivityLog.objects.filter(user=user):
                user_last_activity = UserActivityLog.objects.filter(user=user).last()

                if user_last_activity.date_created != date.today() and user_last_activity.activity_level < 2:
                    UserActivityLog.objects.create(user=user, activity_level=2)

                elif user_last_activity.activity_level < 2:
                    user_last_activity.activity_level = 2
                    user_last_activity.save()
            else:
                UserActivityLog.objects.create(user=user, activity_level=2)

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
        data = []

        user = request.user 
        sorted_courses = UserCourse.objects.filter(user=user).order_by('-opened_at')
        
        for sorted_course in sorted_courses:
            course = Course.objects.filter(title=sorted_course.course.title)[0]
            user_course_page = UserCoursePage.objects.filter(user=user, course=course)
            if user_course_page:
                print(user_course_page[0].page)
                page = user_course_page[0].page
            
            else:
                page = 1

            serializer = CourseOpenSerializer(sorted_course).data

            course_data = {
                'course': serializer,
                'page': page
            }
            
            data.append(course_data)

        return Response(data, status=status.HTTP_200_OK)


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
                or user_code.__contains__('system') 
                or user_code.__contains__('sleep') 
                or user_code.__contains__('Sleep') 
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
                
            if language == 'Assembly':
                container = client.containers.run(
                'gcc:latest',
                command=['timeout', '10s', 'sh', '-c', f'echo \'{user_code}\' > main.cpp && g++ -fpermissive -o main main.cpp && objdump -d -M intel main'],
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

        locale = request.data['locale']

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
            course_price = course.price
            if course_price == 0.00:
                UserCourse.objects.create(user=user, course=course)
                return Response({'link': 'https://nautillus.org/courses/info/Python'}, status=status.HTTP_200_OK)

            elif PromoCode.objects.filter(promo_code=promo_code):
                promo_code_object = PromoCode.objects.filter(promo_code=promo_code)[0]
                
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
                    "return_url": f"http://localhost:5173/{locale}/courses/pay/?encryptedcourseid={encrypted_course_id}&encryptedpromocode={encrypted_promocode}",
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
            
            if PromoCode.objects.filter(promo_code=decrypted_promo_code):
                promo_code_object = PromoCode.objects.filter(promo_code=decrypted_promo_code)[0]
                
                if UserPromoCode.objects.filter(user=user, promo_code=promo_code_object) or UserPromoCode.objects.filter(promo_code=promo_code_object).count() >= promo_code_object.people:
                    print("promo code is unavailable in exec")
                else:
                    print("promo code is available in exec")
                    UserPromoCode.objects.create(user=user, promo_code=promo_code_object)

            UserCourse.objects.create(user=user, course=course)
            
            return Response({'success': 'Payment executed successfully'})
        else:
            return Response({'error': 'Payment execution failed'}, status=status.HTTP_400_BAD_REQUEST)


class BundlePayPalPaymentAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        promo_code = request.data['promo_code']
        # course = Course.objects.filter(title=request.data['title'])[0]
        bundle = CourseBundle.objects.filter(title=request.data['title'])[0]
        user = User.objects.filter(user_name=request.user.user_name)[0]
        locale = request.data['locale']

        # ip = request.META.get('REMOTE_ADDR')
        # url = f"https://api.iplocation.net/?ip={ip}"
        # request_data = requests.get(url=url)
        # country_name = request_data.json()["country_name"]

        # if country_name == "Georgia":
        #     course_price = course.price_geo
        # else:
        #     course_price = course.price
        purchesed_courses = []
        for course in bundle.courses.all():
            if course.price != 0.00:  
                if UserCourse.objects.filter(user=user).filter(course=course):
                    purchesed_courses.append(course)
        
        if len(purchesed_courses) > 2:
            return Response({'error': 'you have more than 2 courses'}, status=status.HTTP_400_BAD_REQUEST)
        
        else:
            purchesed_courses_price = 0
            for purchesed_course in purchesed_courses:
                purchesed_courses_price += round(float(purchesed_course.price) - (float(purchesed_course.price) * (bundle.bundle_sale / 100)), 2)
            
            bundle_price = round(bundle.price - Decimal(purchesed_courses_price), 2)

            if PromoCode.objects.filter(promo_code=promo_code):
                promo_code_object = PromoCode.objects.filter(promo_code=promo_code)[0]
                
                if UserPromoCode.objects.filter(user=user, promo_code=promo_code_object) or UserPromoCode.objects.filter(promo_code=promo_code_object).count() >= promo_code_object.people:
                    print("promo code is unavailable")
                else:
                    print("promo code is available")
                    bundle_price = round(float(bundle_price) - float(bundle_price) * promo_code_object.sale / 100, 2)

            paypalrestsdk.configure({
                "mode": "sandbox", # sandbox or live
                "client_id": "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
                "client_secret": "EA1tf4Uk8iEWt24i2cIOYnNa4gl82SVuxQ6g0hXSEOK1BVTzGP-SSloegncN78yDamthz2QqSjvHjV6V" 
                })
            # paypalrestsdk.configure({
            #     "mode": "live", # sandbox or live
            #     "client_id": "ARx4gN3fHvLP0Tzme9Djm-W_0wjrPkyAyEuIETowB6DeyfA2x_bouwt75DJqn6TTSYe1CQwN-4K7xv0x",
            #     "client_secret": "ENnEy5gTzIO31r3Q6PAWkaivdpLE2AXTXrNF0wUekW1ieipcodHxxcx47H69r_v34tg7BUKvb16HZvcl" 
            # })
            
            key = FERNET_KEY
            fernet = Fernet(key)
            encrypted_bundle_id = fernet.encrypt(str(bundle.id).encode()).decode()
            encrypted_promocode = fernet.encrypt(str(promo_code).encode()).decode()
            print(bundle_price)
            paypal_payment = Payment({
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": f"http://localhost:5173/{locale}/bundles/pay/?encryptedbundleid={encrypted_bundle_id}&encryptedpromocode={encrypted_promocode}",
                    "cancel_url": "yourdomain.com/payment/cancel/"
                },
                "transactions": [
                    {
                        "amount": {
                            "total": f"{bundle_price}",  # Replace with your payment amount
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


class BundlePayPalExecuteAPIView(PayPalPaymentAPIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        paypalrestsdk.configure({
            "mode": "sandbox", # sandbox or live
            "client_id": "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
            "client_secret": "EA1tf4Uk8iEWt24i2cIOYnNa4gl82SVuxQ6g0hXSEOK1BVTzGP-SSloegncN78yDamthz2QqSjvHjV6V" 
            })
        # paypalrestsdk.configure({
        #     "mode": "live", # sandbox or live
        #     "client_id": "ARx4gN3fHvLP0Tzme9Djm-W_0wjrPkyAyEuIETowB6DeyfA2x_bouwt75DJqn6TTSYe1CQwN-4K7xv0x",
        #     "client_secret": "ENnEy5gTzIO31r3Q6PAWkaivdpLE2AXTXrNF0wUekW1ieipcodHxxcx47H69r_v34tg7BUKvb16HZvcl" 
        #     })
        
        payment_id = request.data['payment_id']
        payer_id = request.data['payer_id']

        key = FERNET_KEY
        fernet = Fernet(key)

        encrypted_promo_code = request.data['promo_code']

        decrypted_promo_code = fernet.decrypt(encrypted_promo_code).decode()

        encrypted_bundle_id = request.data["bundle_id"]
        decrypted_bundle_id = int(fernet.decrypt(encrypted_bundle_id).decode())
        print(decrypted_bundle_id)
        bundle = CourseBundle.objects.filter(id=decrypted_bundle_id)[0]

        payment = Payment.find(payment_id)
        if payment.execute({"payer_id": payer_id}):
            user = User.objects.filter(user_name=request.user.user_name)[0]
            
            if PromoCode.objects.filter(promo_code=decrypted_promo_code):
                promo_code_object = PromoCode.objects.filter(promo_code=decrypted_promo_code)[0]
                
                if UserPromoCode.objects.filter(user=user, promo_code=promo_code_object) or UserPromoCode.objects.filter(promo_code=promo_code_object).count() >= promo_code_object.people:
                    print("promo code is unavailable in exec")
                else:
                    print("promo code is available in exec")
                    UserPromoCode.objects.create(user=user, promo_code=promo_code_object)

            UserBundleCourse.objects.create(user=user, course_bundle=bundle)
            for course in bundle.courses.all():
                if not UserCourse.objects.filter(user=user, course=course):
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


# class DeleteUnactiveUsers(views.APIView):
#     permission_classes = [permissions.IsAuthenticated, IsNotBanned]

#     def get(self, request):
#         try:
#             deleted = False
#             today = timezone.now()
#             seven_day_before = today - timedelta(days=7)
#             last_7_days_unactive_users = User.objects.filter(start_date__lte=seven_day_before)
#             print(last_7_days_unactive_users)
#             for user in last_7_days_unactive_users:
#                 if user.is_active == False:
#                     deleted = True
#                     user.delete()
#             if deleted:
#                 return Response({'error': f'unactive users deleted successfully'}, status=status.HTTP_200_OK)
#             else:
#                 return Response({'error': f'no unactive users'}, status=status.HTTP_200_OK)

#         except Exception as error:
#             return Response({'error': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


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
        

class HandleAbout(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        about = request.data['about']

        user = User.objects.filter(user_name=request.user.user_name)[0]

        user.about = about
        user.save()

        return Response({'data': user.about}, status=status.HTTP_200_OK)


class ReturnUserInfo(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, user_name):
        try:
            user = User.objects.filter(user_name=user_name)[0]
            serializer = ReturnUserSerializer(user)

            activity_list = [0] * 182

            for user_activity in UserActivityLog.objects.filter(user=user).order_by('-date_created'):
                index = date.today() - user_activity.date_created

                if index.days >= 182:
                    break

                activity_list[int(index.days)] = user_activity.activity_level

            return Response({"user": serializer.data, "activity_graph": activity_list}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


# jwt/refresh is dros bazashi useri ar chans