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
import time
import threading

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
class CourseOpenView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCourse.objects.all()
    pagination_class = PageNumberPagination
    pagination_class.page_size = 1
    serializer_class = UserOpenCourseSerializer
    
    def get_queryset(self):
        try:
            user = self.request.user 

            # save opend time
            userCourses = UserCourse.objects.filter(user=user)
            if userCourses:
                chosenCourse = userCourses.filter(title=self.kwargs.get('pk'))[0]
                chosenCourse.opened_at = timezone.datetime.now()
                chosenCourse.save()

                course = CourseGroup.objects.filter(title__contains=self.kwargs.get('pk'))
                
                return course
        
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

            client = docker.from_env()

            if  language == 'python':
                container = client.containers.run(
                'python:latest',
                command=f'python -c "{user_code}"',
                remove=True
            )

            if language == 'c++':
                container = client.containers.run(
                'gcc:latest',
                command=['sh', '-c', f'echo \'{user_code}\' > main.cpp && g++ -o main main.cpp && ./main'],
                remove=True
            )

            if language == 'ruby':
                container = client.containers.run(
                'ruby:latest',
                command=['ruby', '-e', user_code],
                remove=True
            )

            output = container.decode('utf-8')
            
            if output == '':
                return Response({'output': 'process time outed'}, status=status.HTTP_400_BAD_REQUEST) 
            
            return Response({'output': output}, status=status.HTTP_200_OK) 
    
{
    "language": "c++",
    "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
}

{
    "language": "c++",
    "code": "#include <iostream>\n\nint main() {\n    for (int i = 1; i <= 200000000; ++i) {\n        std::cout << i << \" \";\n    }\n    \n    std::cout << std::endl;\n    return 0;\n}"
}




# # code of only three docker containers

# class ExecuteCodeAPIView(views.APIView):
#     permission_classes = [permissions.IsAuthenticated]
        
#     def timeout_handler(self, container, client):
#         container.kill()
#         print('kill')
#         container.start()
#         client.close()

#     def post(self, request):
#         try:
#             client = docker.from_env()
#             language = request.data.get('language')
#             user_code = request.data.get('code')

#             # Get the reference to the existing Python container
#             if  language == 'python':
#                 container = client.containers.get('63cea44c53860fac665ac02e10f60ccef1592314c73ba3490af8660cb45e47ad')
#                 command = f'python -c "{user_code}"'

#             if language == 'c++':
#                 container = client.containers.get('a4786a8e90abbfb67f6c08c46defe33649f3cb55f0e471d376d6934456fdca0c')
#                 command=['sh', '-c', f'echo \'{user_code}\' > main.cpp && g++ -o main main.cpp && ./main']

#             if language == 'ruby':
#                 container = client.containers.get('21f86fd8217195c3a8614ea06f99b0baac3aec3379973ddd37fe5341573f9d6c')
#                 command = ['ruby', '-e', user_code]

#             timer = threading.Timer(10, self.timeout_handler, args=(container, client))

#             timer.start()

#             exec_result = container.exec_run(command, stdout=True, stderr=True, tty=True)
        
#             try:
#                 output = exec_result.output.decode('utf-8')
#                 if output:
#                     timer.cancel()
#                     return Response({'output': output}, status=status.HTTP_200_OK) 
#                 else:
#                     return Response({'output': 'process stopped'}, status=status.HTTP_400_BAD_REQUEST)
#             except Exception as error:
#                 return Response({'output': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
            
#         except Exception as error:
#             return Response({'output': f'{error}'}, status=status.HTTP_400_BAD_REQUEST)



    

# jwt/refresh is dros bazashi useri ar chans


