from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('blog/', views.BlogList.as_view(), name='blog-list'),
    path('blog/<str:pk>', views.BlogDetails.as_view(), name='blog-details'),
    path('blog/edit/<str:pk>', views.BlogEdit.as_view(), name='blog-edit'),
    path('blogs/comments/', views.ListComment.as_view(), name='comment-list'),
    path('blogs/comments/create', views.CreateComment.as_view(), name='comment-create'),
    path('blogs/comments/delete', views.DeleteComment.as_view(), name='comment-delete'),
]