from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework import status

class IsNotBanned(BasePermission):
    message = {
        'detail': 'You are banned. Please contact on contact@nautillus.org if there is any problem',
        'banned': True   
        }

    def has_permission(self, request, view):
        if request.user and request.user.is_banned:
            return False

        return True
