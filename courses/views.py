from django.shortcuts import render
from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer
from rest_framework import permissions 
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404



class CourseList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    queryset = queryset.order_by('-date_created')        


class CourseDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Course, title=item)

class CourseEdit(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseCreate(generics.CreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CourseSerializer
    queryset = Course.objects.all()



