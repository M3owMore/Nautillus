from django.urls import path
from . import views

app_name = 'courses'

urlpatterns = [
    path('courses/edit/<str:pk>', views.CourseEdit.as_view(), name='courseedit'),
    path('courses/view/<str:pk>', views.CourseDetail.as_view(), name='coursedetail'),
    path('courses/', views.CourseList.as_view(), name='courselist'),
    path('courses/create-only', views.CourseCreate.as_view(), name='coursecreate'),

]