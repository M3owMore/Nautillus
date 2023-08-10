from django.urls import path

from . import views

app_name = "chat"

a = '/ws/chat/chat_sikha1_sikhito'

urlpatterns = [
    path("chat/", views.index, name="index"),
    path("chat/<str:room_name>/", views.room, name="room"),
    path("api/chat/", views.Rooms.as_view(), name="room"),
    path("api/chat/<str:pk>/", views.RoomDetail.as_view(), name="room-details"),
    path("api/chat/<str:pk>/update", views.RoomUpdate.as_view(), name="room-update"),
    path("api/chat/<str:pk>/delete", views.RoomDestroy.as_view(), name="room-destroy"),
    path("api/user/friends/", views.FriendsList.as_view(), name='firends-list')
]