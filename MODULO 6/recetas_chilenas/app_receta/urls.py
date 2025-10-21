from django.urls import path #cuando el user visite tal link 
from . import views #desde este mismo directorio(app_receta) importa los views

urlpatterns = [
    path('', views.index, name='index'), #si se entra a la raiz  del sitio, django ejecuta funcion index que se encuentra en views
    path('receta/<int:receta_id>/', views.detalle_receta, name='detalle_receta'), #cuando el usuario a /.../receta/1,2,3...(id variable), se ejecuta la funcion detalle_receta del archivo views.py
    path('contacto/', views.contacto, name='contacto'), #cuando el usuario entra a /.../contacto/ se ejecuta funcion contacto de views.py
    path('cazuela/', views.cazuela, name='cazuela-pollo-logo'), #cuando el usuario entra a /.../cazuela/ se ejecuta funcion contacto de views.py
]
