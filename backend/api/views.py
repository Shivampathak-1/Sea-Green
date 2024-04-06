from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer, ImagesSerializer
from rest_framework import status
from rest_framework.response import Response
from .models import User, Images
from .services import userLoginService
from django.utils.decorators import method_decorator
from django.views.decorators.http import require_POST
import os
from ultralytics import YOLO

# Create your views here.

class RegisterView(APIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    @method_decorator(require_POST)
    def post(self, request):
        data = request.data
        serialized = self.serializer_class(data=data)
        if(serialized.is_valid()):
            serialized.save()
            return Response({"status": "ok", "message": "user registered successfully!", "user_id":serialized.data['id']}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": 400, "error": serialized.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class LoginView(APIView):    
    
    @method_decorator(require_POST)
    def post(self, request):
        user = userLoginService(request)
        if user:
            return Response({"status": "ok", "message": "user logged in successfully!", "user_id":user.id}, status=status.HTTP_200_OK)
        else:
            return Response({"status": 400, "message": "user doesn't exist!"}, status=status.HTTP_400_BAD_REQUEST)

class ImagesSendView(APIView):
    serializer_class = ImagesSerializer
    
    @method_decorator(require_POST)
    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data)
            user = User.objects.get(id = request.data.get("user",None))
            if(user == None):
                return Response({"status":"unauthorized","error":"login required"}, status=status.HTTP_401_UNAUTHORIZED)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({"status":"ok","data":serializer.data}, status=status.HTTP_201_CREATED)
            else:
                return Response({"status":"exception","error":"can't be created"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({"status":"exception","error":f"some internal error occured: {e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class Detect(APIView):
    
    @method_decorator(require_POST)
    def post(self, request):
        try:
            user = User.objects.get(id = request.data.get('user_id'))
            if user == None:
                return Response({"status":"unauthorized","error":"login required"}, status=status.HTTP_401_UNAUTHORIZED)
            image = Images.objects.filter(user=request.data.get('user_id')).order_by("-created_at")[0]
            ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
            MODEL = os.path.join(ROOT_DIR, 'YOLO_Custom_v8m.pt')
            model = YOLO(MODEL)
            img_url = image.image
            TEST = os.path.join(ROOT_DIR, img_url.path)
            model.predict(TEST, save=True, conf = 0.37, show = True)
            return Response({"status":"done"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"status":"not ok", "error":e})