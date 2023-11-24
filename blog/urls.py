from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('blog/', views.BlogList.as_view(), name='blog-list'),
    path('blog/<str:pk>', views.BlogDetails.as_view(), name='blog-details'),
    path('blog/edit/<str:pk>', views.BlogEdit.as_view(), name='blog-edit'),
]