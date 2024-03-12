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


import json
from django.utils import timezone
from courses.models import CourseGroup

class UploadTasks(views.APIView):

    def get(self, request):
#         course_groups = CourseGroup.objects.filter(keyword='Python')
#         print(course_groups)

#         tasks_data = [
#     {
#         "question": "დაწერეთ ერთი სტრიქონიანი კომენტარი, რომელშიც ნათქვამია: 'This is a single-line comment.'",
#         "code": " ### This is a single-line comment.",
#         "answers": ["#"]
#     },
#     {
#         "question": "დაწერეთ ერთსტრიქონიანი კომენტარი, რომელიც ხსნის კოდის შემდეგი ხაზის დანიშნულებას:'x = x + 1'",
#         "code": "x = x + 1      ### Incrementing the value of x by 1",
#         "answers": ["#"]
#     }
# ]
#         for task_data in tasks_data:
#             course_group = CourseGroup.objects.filter(title=task_data['lesson'])[0]
#             task = Task.objects.create(
#                 content=task_data['question'],
#                 content_geo=task_data['question_geo'],
#                 code=task_data['code'],
#                 answers=json.dumps(task_data['answers']),
#                 lesson=course_group,
#                 date_created=timezone.now()
#             )
        
#         return Response({"asdf": "asdf"})

        # course_groups = CourseGroup.objects.filter(keyword='Python')

        # for course in course_groups:
        #     if course.tasks != "":
        #         course_jsons = json.loads(course.tasks)
        #         course_jsons_geo = json.loads(course.tasks_geo)
        #         for course_json, course_json_geo in zip(course_jsons, course_jsons_geo):
        #             print(course_json["question"])
        #             task = Task.objects.create(
        #                 content=course_json['question'],
        #                 content_geo=course_json_geo['question'],
        #                 code=course_json['code'],
        #                 answers=json.dumps(course_json['answers']),
        #                 lesson=course,
        #                 date_created=timezone.now()
        #             )

        course_groups = CourseGroup.objects.filter(keyword='Python')
        print(course_groups)

        tasks_data = [
    {
        "question": "დაწერეთ ერთი სტრიქონიანი კომენტარი, რომელშიც ნათქვამია: 'This is a single-line comment.'",
        "code": " ### This is a single-line comment.",
        "answers": ["#"]
    },
    {
        "question": "დაწერეთ ერთსტრიქონიანი კომენტარი, რომელიც ხსნის კოდის შემდეგი ხაზის დანიშნულებას:'x = x + 1'",
        "code": "x = x + 1      ### Incrementing the value of x by 1",
        "answers": ["#"]
    }
]
        for task_data in tasks_data:
            course_group = CourseGroup.objects.filter(title=task_data['lesson'])[0]
            task = MarkTask.objects.create(
                content=task_data['content'],
                content_geo=task_data['content_geo'],
                options = task_data['options'],
                options_geo = task_data['options_geo'],
                answer=task_data['answer'],
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

        task_answer = task.answer
        
        if user_answer != task_answer:
            return Response({'answer_is_right': False, 'is_submitted': False}, status=status.HTTP_200_OK)
        
        elif SubmittedMarkTask.objects.filter(user=user, task=task):
            return Response({'answer_is_right': True, 'is_submitted': True}, status=status.HTTP_200_OK)

        SubmittedMarkTask.objects.create(user=user, task=task)
        user.xp += task.xp
        user.save()

        return Response({'answer_is_right': True, 'is_submitted': False}, status=status.HTTP_200_OK)