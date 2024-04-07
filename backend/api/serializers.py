from rest_framework import serializers
from .models import User, Images

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'username', 'contact_number', 'password']
        
    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['user', 'image', 'created_at']
