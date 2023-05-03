from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from .models import Room

User = get_user_model()

def index(request):
    return render(request, "chat/index.html")

@login_required
def room(request, room_name):
    receiver_user = User.objects.filter(user_name=room_name)
    if receiver_user:
        sender_user_name = request.user.user_name
        receiver_user_name = receiver_user[0].user_name
        username_list = [sender_user_name, receiver_user_name]
        sorted_usernames = sorted(username_list)
        sorted_room_name = f'chat_{sorted_usernames[0]}_{sorted_usernames[1]}'

        if not Room.objects.filter(name=sorted_room_name):
            sender = User.objects.filter(user_name=sender_user_name)[0]
            receiver = User.objects.filter(user_name=receiver_user_name)[0]

            create_room = Room.objects.create(name=sorted_room_name)
            create_room.accessed_users.add(sender)
            create_room.accessed_users.add(receiver)
        else:
            pass

        return render(
            request, "chat/room.html", 
            {"room_name": sorted_room_name, 'sender_user_name': sender_user_name, 'receiver_user_name': receiver_user_name})
    else:
        error = "this user dose not exist"
        return render(request, "chat/index.html", {"error": error})