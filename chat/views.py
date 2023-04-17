from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model

User = get_user_model()

def index(request):
    return render(request, "chat/index.html")

@login_required
def room(request, room_name):
    if User.objects.filter(user_name=room_name):
        return render(request, "chat/room.html", {"room_name": room_name, 'user_name': request.user.user_name})
    else:
        error = "this user dose not exist"
        return render(request, "chat/index.html", {"error": error})