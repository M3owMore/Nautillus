from django.urls import path, include
from .views import (BlacklistTokenUpdateView, 
                    RemoveExpiredTokens, 
                    CustomTokenCreateView, 
                    CourseOpenView, 
                    UserCoursesList, 
                    ReturnLessons, 
                    ExecuteCodeAPIView, 
                    ChangeProfilePicture, 
                    PayPalPaymentAPIView, 
                    PayPalExecuteAPIView,
                )

app_name = 'users'

urlpatterns = [
    path('auth/login/', CustomTokenCreateView.as_view(), name='custom-token-create'),
    # path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
    path('delete-expired-tokens/', RemoveExpiredTokens.as_view(), name='delete_expired_tokens'),
    path('courses/lessons/<str:course_name>', ReturnLessons.as_view(), name='user-opened-course-lessons'),
    path('courses/<str:pk>/', CourseOpenView.as_view(), name='user-opened-course'),
    path('courses/', UserCoursesList.as_view(), name='user-courses'),
    path('execute/', ExecuteCodeAPIView.as_view(), name='code-execute'),
    path('change-pfp/', ChangeProfilePicture.as_view(), name='change-pfp'),
    path('paypal/create_payment/', PayPalPaymentAPIView.as_view(), name='create-payment'),
    path('paypal/execute/', PayPalExecuteAPIView.as_view(), name='execute-payment'),
]