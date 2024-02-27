from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.utils import timezone
from rest_framework.response import Response
from rest_framework import views, generics, permissions, status
from courses.models import CourseGroup
from .models import Task, TaskGeo
from users.permissions import IsNotBanned
from .serializers import TasksSerializer
import json

User = get_user_model()


import json
from django.utils import timezone
from courses.models import CourseGroup

class UploadTasks(views.APIView):

    def get(self, request):
#         course_groups = CourseGroup.objects.filter(keyword='Python')
#         print(course_groups)
#         course_group = CourseGroup.objects.filter(title='Python Comments')[0]

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
#             task = TaskGeo.objects.create(
#                 content=task_data['question'],
#                 code=task_data['code'],
#                 answers=json.dumps(task_data['answers']),
#                 lesson=course_group,
#                 date_created=timezone.now()
#             )
        course_groups = CourseGroup.objects.filter(keyword='Python')

        for course in course_groups:
            if course.tasks != "":
                course_jsons = json.loads(course.tasks)
                for course_json in course_jsons:
                    print(course_json["question"])
                    task = Task.objects.create(
                        content=course_json['question'],
                        code=course_json['code'],
                        answers=json.dumps(course_json['answers']),
                        lesson=course,
                        date_created=timezone.now()
                    )

        return Response({"asdf": "asdf"})


class ReturnTasks(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        lesson = request.data['lesson']
        language = request.data['lang']

        lesson_obj = CourseGroup.objects.filter(title=lesson)[0]

        if language == 'ge':
            tasks = TaskGeo.objects.filter(lesson=lesson_obj)
        else:
            tasks = Task.objects.filter(lesson=lesson_obj)

        serializer = TasksSerializer(tasks, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CheckTasks(views.APIView):
    permission_classes = [permissions.IsAuthenticated, IsNotBanned]

    def post(self, request):
        task = Task.objects.filter(id=request.data['task_id'])[0]

        user_answer = request.data['answer']

        task_answer = json.loads(task.answers)
        
        for i in range(0, len(user_answer)):
            print(f'user {user_answer[i]}')
            print(f'task {task_answer[i]}')
            if user_answer[i] != task_answer[i]:
                return Response({'answer_is_right': False}, status=status.HTTP_200_OK)

        return Response({'answer_is_right': True}, status=status.HTTP_200_OK)
