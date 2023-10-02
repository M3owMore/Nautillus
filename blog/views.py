from django.shortcuts import render
from rest_framework import generics
from .models import Blog
from .serializer import BlogSerializer
from rest_framework import permissions 


class BlogList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
    queryset = queryset.order_by('-date')  


class BlogDetails(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class BlogEdit(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
