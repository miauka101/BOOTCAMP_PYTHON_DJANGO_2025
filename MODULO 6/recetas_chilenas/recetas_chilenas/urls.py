from django.contrib import admin   #importa el panel de administracion
from django.urls import path, include # path: definicion de rutas directamente aqui , include: ayuda a importar las rutas de otra app
from django.conf import settings #importa lo de settings
from django.conf.urls.static import static #permite ver lo de carpeta "static"

urlpatterns = [
    path('admin/', admin.site.urls), #crea ruta para el panel de administracion 
    path('', include('app_receta.urls')), #todas las rutas base se buscando dentro de "app_receta/urls.py"
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #sirve para que django muestre las imagenes o archivos subidos
    #solo sirve mientras se esta en modo desarrollo, en la realidad se usaria apache por ejemplo