from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Room, FriendRequest, Message, DisconnectTime, ConnectTime
from rest_framework import generics
from rest_framework import permissions 
from .serializers import RoomSerializer, UserFriendsSerializer
from rest_framework.exceptions import NotFound
from rest_framework import status
from rest_framework.response import Response
from rest_framework import views 
import json

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
            
# gasatesti
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
        

class FriendRequestList(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        try:
            friend_requests = FriendRequest.objects.filter(receiver=request.user)
            senders = []
            for friend_request in friend_requests:
                senders.append(friend_request.sender)
            print(senders)
            serializer = UserFriendsSerializer(senders, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as error:
                return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        

class AddFriends(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.filter(user_name=request.user.user_name)[0]
            friend = User.objects.filter(user_name=request.data['user_name'])[0]

            if user.friends.all().filter(user_name=friend.user_name):
                return Response({"error": 'user is already friend'}, status=status.HTTP_400_BAD_REQUEST)

            elif FriendRequest.objects.filter(receiver=user, sender=friend):
                user.friends.add(friend)
                friend.friends.add(user)
                FriendRequest.objects.filter(receiver=user, sender=friend).delete()
                serializer = UserFriendsSerializer(friend)
                return Response(serializer.data, status=status.HTTP_200_OK)
            
            else:
                return Response({"error": 'user is not in requests'}, status=status.HTTP_400_BAD_REQUEST)
    
        except Exception as error:
                return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
    

class RequestAddFriends(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            sender_user = User.objects.filter(user_name=request.user.user_name)[0]
            reciever_user = User.objects.filter(user_name=request.data['user_name'])[0]

            if FriendRequest.objects.filter(sender=sender_user, receiver=reciever_user) or FriendRequest.objects.filter(receiver=sender_user, sender=reciever_user):
                return Response({"error": 'request has been already sent'}, status=status.HTTP_400_BAD_REQUEST)
            
            else:
                FriendRequest.objects.create(sender=sender_user, receiver=reciever_user)
                
            serializer = UserFriendsSerializer(reciever_user)
        
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)


class FriendRequestDecline(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            receiver_user = User.objects.filter(user_name=request.user.user_name)[0]
            sender_user = User.objects.filter(user_name=request.data['user_name'])[0]

            FriendRequest.objects.filter(sender=sender_user, receiver=receiver_user)[0].delete()
            
        
            return Response({"output": 'request succesfuly deleted'}, status=status.HTTP_200_OK)

        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        

class ReturnUserInfo(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.filter(user_name=request.data['user_name'])[0]
            serializer = UserFriendsSerializer(user)
            request_user = User.objects.filter(user_name=request.user.user_name)[0]
            request_user_info = {
                'user_name': request_user.user_name,
                'sended_request': False,
                'friend': False,
                'received_request': False
            }
            if FriendRequest.objects.filter(sender=request_user, receiver=user):
                request_user_info['sended_request'] = True
            if FriendRequest.objects.filter(sender=user, receiver=request_user):
                request_user_info['received_request'] = True
            if request_user.friends.all().filter(user_name=user.user_name):
                request_user_info['friend'] = True

            return Response({"serializer_data": serializer.data, "user_info": request_user_info}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        
class Unfriend(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.filter(user_name=request.data['user_name'])[0]
            request_user = User.objects.filter(user_name=request.user.user_name)[0]
            request_user.friends.remove(user)

            serializer = UserFriendsSerializer(user)

            if Room.objects.filter(accessed_users=user).filter(accessed_users=request_user):
                room = Room.objects.filter(accessed_users=user).filter(accessed_users=request_user)[0]
                room.delete()
            else:
                print('no room on this users')

            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        

class SearchUser(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.filter(user_name__icontains=request.data['user_name'])

            serializer = UserFriendsSerializer(user, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({"error": f'{error}'}, status=status.HTTP_400_BAD_REQUEST)
        

class CheckChatNotifications(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = User.objects.filter(user_name = request.user.user_name)[0]
        rooms = Room.objects.filter(accessed_users=user)
        notification_list = []

        for room in rooms:
            room_dict = {
            "name": None,
            "seen": None    
            }
            
            last_massage = Message.objects.filter(room=room).last()
            try:
                user_disconnect = DisconnectTime.objects.filter(room=room, user=user)[0]
                user_connect = ConnectTime.objects.filter(room=room, user=user)[0]
                
                if user_connect.time > user_disconnect.time:
                    room_dict["name"] = room.name
                    room_dict["seen"] = True
                    notification_list.append(room_dict)

                elif user_disconnect.time > user_connect.time and last_massage.timestamp > user_disconnect.time:
                    room_dict["name"] = room.name
                    room_dict["seen"] = False
                    notification_list.append(room_dict)
                
                elif user_disconnect.time > user_connect.time and last_massage.timestamp < user_disconnect.time:
                    room_dict["name"] = room.name
                    room_dict["seen"] = True
                    notification_list.append(room_dict)

            except Exception as error:
                print(error)
        
        return Response(notification_list, status=status.HTTP_200_OK)
