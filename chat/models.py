from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone 


User = get_user_model()
class Message(models.Model):
    author = models.ForeignKey(User, related_name="author_messages", on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.author.user_name
    
    def last_10_messages():
        return Message.objects.order_by('-timestamp').all()[:10][::-1]