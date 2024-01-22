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
                    ReturnNotifications,
                    ReturnLastUserCoursePage,
                    CheckUserPromoCode,
                    DeleteUnactiveUsers,
                    CustomUserCreateView,
                    GetUserIPLocation
                )

app_name = 'users'

urlpatterns = [
    path('auth/login/', CustomTokenCreateView.as_view(), name='custom-token-create'),
    path('auth/users/', CustomUserCreateView.as_view({'post': 'create'}), name='custom-user-create'),
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
    path('notifications/', ReturnNotifications.as_view(), name='notifications'),
    path('courses/last/page/<str:title>', ReturnLastUserCoursePage.as_view(), name='last-user-opened-page'),
    path('promo_code/', CheckUserPromoCode.as_view(), name='create-promo-code'),
    path('delete-unactive-users/', DeleteUnactiveUsers.as_view(), name='delete-unactive-users'),
    path('user_ip/', GetUserIPLocation.as_view(), name='user-ip-location'),
    # path('courses/lesson/image', ReturnLessonImage.as_view(), name='return-lesson-image'),
]