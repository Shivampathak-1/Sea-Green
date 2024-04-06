from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name="Register"),
    path('login/', views.LoginView.as_view(), name="login"),
    path('image-upload/', views.ImagesSendView.as_view(), name="image_upload"),
    path('image-detect/', views.Detect.as_view(), name="image_detect")
]