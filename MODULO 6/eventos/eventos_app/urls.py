#urls de app llama a todos las funciones de views.py 
from django.urls import path 
from . import views 

urlpatterns = [
    path ('', views.registrar_evento, name='evento_participante'),
    path("exito/", views.exito, name="exito")
]
