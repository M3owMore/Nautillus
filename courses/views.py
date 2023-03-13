from django.shortcuts import render
from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer
from rest_framework import permissions 
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.cache import cache



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
        if cache.get(item):
            course = cache.get(item)
            print("hit the cache")
        else:
            try:
                course = get_object_or_404(Course, title=item)
                cache.set(item, course)
                print('hit the DB')
            except:
                return status.HTTP_404_NOT_FOUND
            
        return course
    
    
class CourseEdit(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseCreate(generics.CreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CourseSerializer
    queryset = Course.objects.all()



