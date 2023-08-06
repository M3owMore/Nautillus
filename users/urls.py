from django.urls import path, include
from .views import BlacklistTokenUpdateView, RemoveExpiredTokens, CustomTokenCreateView, CourseOpenView, UserCoursesList

app_name = 'users'

urlpatterns = [
    path('auth/login/', CustomTokenCreateView.as_view(), name='custom-token-create'),
    # path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
    path('delete-expired-tokens/', RemoveExpiredTokens.as_view(), name='delete_expired_tokens'),
    path('courses/<str:title>', CourseOpenView.as_view(), name='user-opened-course'),
    path('courses/', UserCoursesList.as_view(), name='user-courses')
]