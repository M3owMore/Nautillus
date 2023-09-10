from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone 
from django.db.models.signals import pre_delete
from django.dispatch import receiver

User = get_user_model()

class Room(models.Model):
    name = models.TextField(max_length=100)
    accessed_users = models.ManyToManyField(User, limit_choices_to={'is_active': True})

    def __str__(self) -> str:
        return self.name
    
@receiver(pre_delete, sender=User)
def delete_rooms(sender, instance, **kwargs):
    for room in instance.room_set.all():
        room.delete()

# x mesijebis limiti anu x tu acda mesijebis raodenoba konkretul roomshi unda waishalos wina mesijebi
# front gavugzavno fotos id ebi     
class Message(models.Model):
    content = models.TextField()
    sender = models.ForeignKey(User, related_name="sender_messages", on_delete=models.CASCADE)
    room = models.ForeignKey(Room, related_name="room_name", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.sender.user_name
    
    def ReturnMessages(room_name):
        room = Room.objects.get(name=room_name)
        messages = Message.objects.filter(room=room)

        return messages
    

class FriendRequest(models.Model):
    sender = models.ForeignKey(User, related_name="request_sender", on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name="request_receiver", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)

    

