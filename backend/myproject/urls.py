from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# Define the index function first
def index(request):
    return HttpResponse("API Server Running")

# Then use it in urlpatterns
urlpatterns = [
    path('', index, name='index'),  # Added name parameter for better URL reversing
    path('admin/', admin.site.urls),
    path('auth/', include('custom_auth.urls')),
]