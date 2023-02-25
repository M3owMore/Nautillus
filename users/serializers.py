from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

# class RegisterUserSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = NewUser
#         fields = ('email', 'user_name', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)

#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'user_name', 'password')