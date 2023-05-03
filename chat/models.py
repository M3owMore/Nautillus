from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone 


User = get_user_model()

class Room(models.Model):
    name = models.TextField(max_length=100)
    accessed_users = models.ManyToManyField(User)

    def __str__(self) -> str:
        return self.name
    
class Message(models.Model):
    content = models.TextField()
    sender = models.ForeignKey(User, related_name="sender_messages", on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name="receiver_messages", on_delete=models.CASCADE)
    room = models.ForeignKey(Room, related_name="room_name", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.sender.user_name
    
    def last_10_messages(room_name):
        room = Room.objects.get(name=room_name)
        messages = Message.objects.filter(room=room)
        return messages[:10]
    

