from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    name = models.CharField(null=False, blank=False, max_length=50)
    email = models.EmailField(null=False, blank=False, unique=True)
    username = models.CharField(null=False, blank=False, max_length=50)
    contact_number = models.CharField(max_length=20, null=False, blank=False)
    password = models.CharField(max_length=30, null=False, blank=False)
    # Add or change related_name for groups
    groups = models.ManyToManyField(Group, related_name='custom_user_groups')

    # Add or change related_name for user_permissions
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions')
    
    def __str__(self) -> str:
        return self.email
    

class Images(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='predict_images/')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.user.email
