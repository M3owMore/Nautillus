import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Message, Room
from users.models import NewUser
from django.contrib.auth import get_user_model
from asgiref.sync import sync_to_async
import asyncio


User = get_user_model()

class ChatConsumer(AsyncWebsocketConsumer):
    @sync_to_async
    def fetch_messages(self, data):
        messages = Message.ReturnMessages(data['room_name'])
        content = {
            'command': 'fetch_messages',
            'messages': self.messages_to_json(messages)
        }
        asyncio.run(self.send_message(content))

    @sync_to_async
    def new_message(self, data):
        sender = data['sender']
        room_name = data['room_name']
        
        sender_user = User.objects.filter(user_name=sender)[0]
        room = Room.objects.filter(name=room_name)[0]
        message = Message.objects.create(sender=sender_user, content=data['message'], room=room)

        room = Room.objects.get(name=room_name)
        messages_in_room = Message.objects.filter(room=room)
        if len(messages_in_room) >= 150:
            messages_to_delete = Message.objects.filter(room=room)[:len(messages_in_room) - 100]
            for obj in messages_to_delete:
                obj.delete()
            
        content = {
            'command': 'new_message',
            'message': self.message_to_json(message)
        }
        return asyncio.run(self.send_chat_message(content))
    
    def messages_to_json(self, messages):
        result = []
        for message in messages:
            result.append(self.message_to_json(message))
        return result
    
    def message_to_json(self, message):
        return {
            'sender': message.sender.user_name,
            'content': message.content,
            'timestamp': str(message.timestamp)
        }


    async def connect(self):
        # aq group name aris mtavari sadac igzavneba mesijebi
        room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = room_name
        await self.channel_layer.group_add(
            self.room_group_name, self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name, self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        if text_data_json['command'] == "fetch_messages":
            await self.fetch_messages(text_data_json)

        elif text_data_json['command'] == "new_message":
            await self.new_message(text_data_json)

    async def send_chat_message(self, message):
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat_message", "message": message}
        )

    async def send_message(self, message):
        await self.send(text_data=json.dumps(message))

    async def chat_message(self, event):
        message = event["message"]
        await self.send(text_data=json.dumps(message))