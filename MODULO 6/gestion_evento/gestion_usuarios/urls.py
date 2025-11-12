from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListaEventos.as_view(), name='lista_eventos'),  
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('eventos/crear/', views.CrearEvento.as_view(), name='crear_evento'),
    path('eventos/editar/<int:pk>/', views.EditarEvento.as_view(), name='editar_evento'),
    path('eventos/eliminar/<int:pk>/', views.EliminarEvento.as_view(), name='eliminar_evento'),
]
