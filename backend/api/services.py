from .models import User

def userLoginService(request):
    try:
        data = request.data
        # print("Email: ",data.email)
        # print("Pass: ",data.password)
        email = data.get("email", None)
        password = data.get("password", None)
        user = User.objects.get(email = email, password = password)
        return user
    except:
        return None    