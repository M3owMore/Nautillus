from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Room
from rest_framework import generics
from rest_framework import permissions 
from .serializers import RoomSerializer, UserFriendsSerializer
from rest_framework.exceptions import NotFound
from rest_framework import status
from rest_framework.response import Response
from rest_framework import views 


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
            {"room_name": sorted_room_name, 'sender_user_name': sender_user_name})
    else:
        error = "this user dose not exist"
        return render(request, "chat/index.html", {"error": error})







def make_room_name(request, receiver):
    receiver_user = User.objects.filter(user_name=receiver)
    if receiver_user:
        sender_user_name = request.user.user_name
        receiver_user_name = receiver_user[0].user_name
        username_list = [sender_user_name, receiver_user_name]
        sorted_usernames = sorted(username_list)
        sorted_room_name = f'chat_{sorted_usernames[0]}_{sorted_usernames[1]}'

        return sorted_room_name
    
    else:
        raise NotFound(detail="error 404, user not found", code=404)

def get_user(username):
    user = get_object_or_404(User, user_name=username)
    return user

class Rooms(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
    # def get_queryset(self):
    #     username = self.request.query_params.get('username', None)
    #     if username is not None:
    #         user = get_user(username=username)
    #         return Room.objects.filter(accessed_users=user)
    def get_queryset(self):
        user = self.request.user
        return Room.objects.filter(accessed_users=user)
            

class RoomDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()

    def get_object(self, queryset=None, **kwargs):
        receiver_name = self.kwargs.get('pk')
        room_name = make_room_name(self.request, receiver_name)
        try:
            room = Room.objects.filter(name=room_name)[0]
            return room
        except:
            return None
    
    def retrieve(self, request, *args, **kwargs):
        room = self.get_object()
        if room is not None:
            serializer = self.get_serializer(room)
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            receiver_name = self.kwargs.get('pk')
            room_name = make_room_name(request, receiver_name)

            sender_user = self.request.user
            receiver_user = User.objects.filter(user_name=receiver_name)[0]
            if sender_user.is_active and receiver_user.is_active:
                room = Room.objects.create(name=room_name)
                room.accessed_users.add(sender_user)
                room.accessed_users.add(receiver_user)
                serializer = self.get_serializer(room)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                raise NotFound(code=400, detail='one of the user is not active')


class RoomCreate(generics.CreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()


class RoomUpdate(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
    def get_object(self, queryset=None, **kwargs):
        receiver_name = self.kwargs.get('pk')
        room_name = make_room_name(self.request, receiver_name)
        return get_object_or_404(Room, name=room_name)


class RoomDestroy(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
    def get_object(self, queryset=None, **kwargs):
            receiver_name = self.kwargs.get('pk')
            room_name = make_room_name(self.request, receiver_name)
            return get_object_or_404(Room, name=room_name)
    

class FriendsList(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        try:
            user = User.objects.filter(user_name=request.user.user_name)[0]
            serializer = UserFriendsSerializer(user.friends.all(), many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as error:
                return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
    

class AddFriends(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.filter(user_name=request.user.user_name)[0]
            friend = User.objects.filter(user_name=request.data['friend_user_name'])[0]
            user.friends.add(friend)

            serializer = UserFriendsSerializer(friend, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
        except Exception as error:
                return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
    

class RequestAddFriends(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            sender_user = User.objects.filter(user_name=request.user.user_name)[0]
            reciever_user = User.objects.filter(user_name=request.data['user_name'])[0]
            reciever_user.friend_request.add(sender_user)

            serializer = UserFriendsSerializer(reciever_user)
        
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        

class ReturnFriendRequests(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            user = User.objects.filter(user_name=request.user.user_name)[0]
            serializer = UserFriendsSerializer(user.friend_request.all(), many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class ReturnUser(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.filter(user_name=request.data['user_name'])[0]
            serializer = UserFriendsSerializer(user)

            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)



        

