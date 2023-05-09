import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Message, Room
from users.models import NewUser
from django.contrib.auth import get_user_model

User = get_user_model()

class ChatConsumer(WebsocketConsumer):

    def fetch_messages(self, data):
        messages = Message.last_10_messages(data['room_name'])
        content = {
            'command': 'fetch_messages',
            'messages': self.messages_to_json(messages)
        }
        self.send_message(content)

    def new_message(self, data):
        sender = data['sender']
        receiver = data['receiver'] # unda wavlshalo
        room_name = data['room_name']
        
        sender_user = User.objects.filter(user_name=sender)[0]
        receiver_user = User.objects.filter(user_name=receiver)[0]
        room = Room.objects.filter(name=room_name)[0]
        message = Message.objects.create(sender=sender_user, receiver=receiver_user, content=data['message'], room=room)
        content = {
            'command': 'new_message',
            'message': self.message_to_json(message)
        }
        return self.send_chat_message(content)

    def messages_to_json(self, messages):
        result = []
        for message in messages:
            result.append(self.message_to_json(message))
        return result
    
    def message_to_json(self, message):
        return {
            'sender': message.sender.user_name,
            'receiver': message.receiver.user_name, # unda wavshalo
            'content': message.content,
            'timestamp': str(message.timestamp)
        }


    def connect(self):
        # aq group name aris mtavari sadac igzavneba mesijebi
        room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message,
    }

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        self.commands[text_data_json['command']](self, text_data_json)

    def send_chat_message(self, message):
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {"type": "chat_message", "message": message}
        )

    def send_message(self, message):
        self.send(text_data=json.dumps(message))

    def chat_message(self, event):
        message = event["message"]
        self.send(text_data=json.dumps(message))