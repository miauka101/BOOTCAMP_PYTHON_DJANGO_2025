from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import RegistroForm, ParticipanteForm

# Create your views here.
def registrar_evento(request):
    if request.method == 'POST':
        form_evento = RegistroForm(request.POST)
        form_participante = ParticipanteForm(request.POST)
        
        if form_evento.is_valid() and form_participante.is_valid(): #revisa si todos los campos estan completos, fecha futura, correo es valido...
            evento = form_evento.save()
            
            participante = form_participante.save(commit=False)
            participante.evento = evento
            participante.save()
            
            messages.success(request, "¡Evento y participante registrados con éxito!")            
            
            return redirect('exito')  # te manda a una página de éxito
        
        else:
            messages.error(request, "Corrige los datos antes segur adelante.")
            
        
    else:
        form_evento = RegistroForm()
        form_participante = ParticipanteForm()
        
    return render(request, 'eventos_app/evento_participante.html', {
        'form_evento': form_evento,
        'form_participante': form_participante})
    
def exito (request):
    return render(request, 'eventos_app/exito.html')
    