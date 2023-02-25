from django.urls import path, include
# from .views import CustomUserCreate

app_name = 'users'

urlpatterns = [
    # path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt'))
]