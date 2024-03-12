from django.shortcuts import render
from rest_framework import generics
from .models import Blog, Comment
from .serializer import BlogSerializer, CommentSerializer
from rest_framework import permissions 
from rest_framework.pagination import PageNumberPagination
from rest_framework import views 
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model

User = get_user_model()


class CustomPagination(PageNumberPagination):
    page_size = 10

    
class BlogList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
    queryset = queryset.order_by('-date')
    pagination_class = CustomPagination



class BlogDetails(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class BlogEdit(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class ListComment(views.APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        try:
            responses = []

            blog_id = request.data['blog_id']
            blog = Blog.objects.filter(id=blog_id)[0]

            comments = Comment.objects.filter(blog=blog)

            for comment in comments:
                response = {
                    'user_name': comment.user.user_name,
                    'profile_picture': comment.user.profile_picture,
                    'comment_id': comment.id,
                    'comment': comment.comment,
                    'date': comment.date
                }

                responses.append(response)


            return Response(responses, status=status.HTTP_200_OK)
        
        except Exception as error:
                return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)

class CreateComment(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        try:
            blog_id = request.data['blog_id']
            blog = Blog.objects.filter(id=blog_id)[0]

            user = User.objects.filter(user_name=request.user.user_name)[0]

            comment = request.data['comment']

            created_comment = Comment.objects.create(user=user, blog=blog, comment=comment)

            serializer = CommentSerializer(created_comment)

            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as error:
                return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST) 

class DeleteComment(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        user = User.objects.filter(user_name=request.user.user_name)[0]

        comment = Comment.objects.filter(id=request.data['comment_id'])[0]

        if comment.user == user:
            comment.delete()

            return Response({"details": 'comment successfuly deleted'}, status=status.HTTP_200_OK)
        
        else:
            return Response({"error": 'that comment is not belong to that user'}, status=status.HTTP_400_BAD_REQUEST)
