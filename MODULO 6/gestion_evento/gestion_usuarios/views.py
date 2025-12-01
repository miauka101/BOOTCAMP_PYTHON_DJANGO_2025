from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Group
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import CustomUser, Evento


#REGISTRO EN PLATAFORMA CON CONTRASENA
def register(request):
    class CustomUserCreationForm(UserCreationForm):
        class Meta:
            model = CustomUser
            fields = ['username', 'email', 'password1', 'password2']

    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            asistente_group = Group.objects.get(name='Asistente')
            user.groups.add(asistente_group)
            
            login(request, user)
            return redirect('/')  
    else:
        form = CustomUserCreationForm()
    return render(request, 'gestion_usuarios/register.html', {'form': form})



#autenticandose
def login_view(request):
    if request.user.is_authenticated:
        return redirect('/')   #una vez logueado te manda a lista_eventos

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/') 
        else:
            messages.error(request, 'Usuario o contraseña incorrectos.')
    return render(request, 'gestion_usuarios/login.html')


#salir de sesion
def logout_view(request):
    logout(request)
    return redirect('/')


#lista de eventos
class ListaEventos(LoginRequiredMixin, ListView):
    model = Evento
    template_name = 'gestion_usuarios/lista_eventos.html'

#creacion de evento
class CrearEvento(LoginRequiredMixin, PermissionRequiredMixin, CreateView):
    model = Evento
    fields = ['nombre', 'fecha', 'descripcion']
    template_name = 'gestion_usuarios/crear_evento.html'
    permission_required = 'gestion_usuarios.crear_evento'
    success_url = '/'
    
    def form_valid(self, form): ######VALIDA Y MUESTRA MENSAJES CON COLOR
        messages.success(self.request, "Evento creado correctamente.")
        return super().form_valid(form)
    
    def get_form(self): ##########SELECTOR DE CALENDARIO     
        form = super().get_form()
        form.fields['fecha'].widget.input_type = 'date'
        return form

#edicion de evento 
class EditarEvento(LoginRequiredMixin, PermissionRequiredMixin, UpdateView):
    model = Evento
    fields = ['nombre', 'fecha', 'descripcion']
    template_name = 'gestion_usuarios/editar_evento.html'
    permission_required = 'gestion_usuarios.editar_evento'
    success_url = '/'  
    
    def form_valid(self, form): ######VALIDA Y MUESTRA MENSAJES CON COLOR
        messages.success(self.request, "Cambios guardados con éxito.")
        return super().form_valid(form)
    
    def get_form(self): ##########SELECTOR DE CALENDARIO 
        form = super().get_form()
        form.fields['fecha'].widget.input_type = 'date'
        return form

#eliminar evento        
class EliminarEvento(LoginRequiredMixin, PermissionRequiredMixin, DeleteView):
    model = Evento
    template_name = 'gestion_usuarios/eliminar_evento.html'
    permission_required = 'gestion_usuarios.eliminar_evento'
    success_url = '/'    
    

    

