from django.shortcuts import render
from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer
from rest_framework import permissions 
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.cache import cache
from rest_framework.exceptions import NotFound
from users.models import UserCourse, NewUser
from rest_framework import views 

class CourseList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    queryset = queryset.order_by('-date_created')  


class CourseDetail(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            user = NewUser.objects.filter(user_name=request.data['user_name'])[0]
        except:
            user = None

        item = self.kwargs.get('pk')
        if cache.get(item):
            if Course.objects.filter(title=item):
                courseFromDb = Course.objects.get(title=item)
                course = cache.get(item)
                print("hit the cache")
                if course.description != courseFromDb.description:
                    cache.delete(course)
                    course = get_object_or_404(Course, title=item)
                    cache.set(item, course)
                    print("delete course from cache")
            else:
                raise NotFound(detail="error 404, course not found", code=404)
        else:
            try:
                course = get_object_or_404(Course, title=item)
                cache.set(item, course)
                print('hit the DB')
            except:
                raise NotFound(detail="error 404, course not found", code=404)
            
        serializer = CourseSerializer(course)

        course = Course.objects.filter(title=self.kwargs.get('pk'))[0]
        
        if UserCourse.objects.filter(user=user, course=course):
            return Response({'data': serializer.data, 'error': 'this course is already purchased'}, status=status.HTTP_200_OK)
        else:
            return Response({'data': serializer.data}, status=status.HTTP_200_OK)

        
    
    
class CourseEdit(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseCreate(generics.CreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CourseSerializer
    queryset = Course.objects.all()



