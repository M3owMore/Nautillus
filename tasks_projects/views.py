from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.utils import timezone
from rest_framework.response import Response
from rest_framework import views, generics, permissions, status
from courses.models import CourseGroup
from .models import Task, SubmittedTask, MarkTask, SubmittedMarkTask
from users.permissions import IsNotBanned
from .serializers import TasksSerializer, MarkTasksSerializer
import json

User = get_user_model()


class UploadTasks(views.APIView):

    def get(self, request):

        tasks_data = []



        # for task_data in tasks_data:
        #     course_group = CourseGroup.objects.filter(title=task_data['lesson'])[0]
        #     task = MarkTask.objects.create(
        #         content=task_data['content'],
        #         content_geo=task_data['content_geo'],
        #         options = json.dumps(task_data['options']),
        #         options_geo = json.dumps(task_data['options_geo'], ensure_ascii=False),
        #         answer=task_data['answer'],
        #         lesson=course_group,
        #         date_created=timezone.now()
        #     )

        for task_data in tasks_data:
            course_group = CourseGroup.objects.filter(title=task_data['lesson'])[0]
            task = Task.objects.create(
                content=task_data['question'],
                content_geo=task_data['question_geo'],
                code=task_data["code"],
                answers=json.dumps(task_data['answers']),
                lesson=course_group,
                date_created=timezone.now()
            )
        
        return Response({"asdf": "asdf"})
             

class ReturnTasks(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        lesson = request.data['lesson']

        lesson_obj = CourseGroup.objects.filter(title=lesson)[0]

        tasks = Task.objects.filter(lesson=lesson_obj)

        serializer = TasksSerializer(tasks, many=True)

        print(serializer.data)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CheckTasks(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        user = User.objects.filter(user_name=request.user.user_name)[0]

        task = Task.objects.filter(id=request.data['task_id'])[0]

        user_answer = request.data['answer']

        task_answer = json.loads(task.answers)
        
        for i in range(0, len(user_answer)):
            print(f'user {user_answer[i]}')
            print(f'task {task_answer[i]}')
            if user_answer[i] != task_answer[i]:
                return Response({'answer_is_right': False, 'is_submitted': False}, status=status.HTTP_200_OK)
        
        if SubmittedTask.objects.filter(user=user, task=task):
            return Response({'answer_is_right': True, 'is_submitted': True}, status=status.HTTP_200_OK)

        SubmittedTask.objects.create(user=user, task=task)
        user.xp += task.xp
        user.save()

        return Response({'answer_is_right': True, 'is_submitted': False}, status=status.HTTP_200_OK)


class ReturnMarkTasks(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        lesson = request.data['lesson']

        lesson_obj = CourseGroup.objects.filter(title=lesson)[0]

        tasks = MarkTask.objects.filter(lesson=lesson_obj)

        serializer = MarkTasksSerializer(tasks, many=True)

        print(serializer.data)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CheckMarkTasks(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        user = User.objects.filter(user_name=request.user.user_name)[0]

        task = MarkTask.objects.filter(id=request.data['task_id'])[0]

        user_answer = request.data['answer']

        task_answer = task.answers
        
        if user_answer != task_answer:
            return Response({'answer_is_right': False, 'is_submitted': False}, status=status.HTTP_200_OK)
        
        elif SubmittedTask.objects.filter(user=user, task=task):
            return Response({'answer_is_right': True, 'is_submitted': True}, status=status.HTTP_200_OK)

        SubmittedMarkTask.objects.create(user=user, task=task)
        user.xp += task.xp
        user.save()

        return Response({'answer_is_right': True, 'is_submitted': False}, status=status.HTTP_200_OK)