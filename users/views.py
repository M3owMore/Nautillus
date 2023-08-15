from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import views 
from rest_framework import generics
# from .serializers import RegisterUserSerializer
from rest_framework import permissions
from rest_framework import status
from djoser import email
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken
from django.utils import timezone
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.views import TokenObtainPairView
from courses.models import Course
from .models import UserCourse
from .serializers import CourseOpenSerializer, UserOpenCourseSerializer

User = get_user_model()

class ActivationEmail(email.ActivationEmail):
    template_name = 'activateEmail.html'

class ResetPasswordEmail(email.PasswordResetEmail):
    template_name = 'resetPass.html'

# class CustomUserCreate(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         reg_serializer = RegisterUserSerializer(data=request.data)

#         if reg_serializer.is_valid():
#             newuser = reg_serializer.save()

#             if newuser:
#                 return Response(status=status.HTTP_201_CREATED)
        
#         return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# users mivcet limiti tokenebis dagenerirebis max 5 cali

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

# problema aris rom tu users aqvs 5 vadagasuli tokeni da accdan gamosulia 
# aq vegar gaigzavneba requesti radgan useri unda iyos accze shesabamisad verc vadagasuli tokenebi waishleba
# anu vegarc accze sheva useri
# aseve dablacklistebuli tokenebic unda waishalos
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
                    print("Expired tokens are deleted") # wasashleli
                
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

# wesit yvelaferi mushaobs gatestvaga unda
class CourseOpenView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, title):
        user = request.user 
        userCourses = UserCourse.objects.filter(user=user)
        chosenCourse = userCourses.filter(title=title)[0]
        chosenCourse.opened_at = timezone.datetime.now()
        chosenCourse.save()
        serializer = UserOpenCourseSerializer(chosenCourse.course)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserCoursesList(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user 
        sorted_courses = UserCourse.objects.filter(user=user).order_by('-opened_at')
        serializer = CourseOpenSerializer(sorted_courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# jwt/refresh is dros bazashi useri ar chans

