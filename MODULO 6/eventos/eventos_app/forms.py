from django import forms
from .models import Registro, Participante
from django.utils import timezone

class RegistroForm(forms.ModelForm):
    class Meta:
        model = Registro
        fields = ['nombre_evento', 'fecha_evento', 'ubicacion']
        help_texts = {
            'fecha_evento': 'Escribe fecha con año-mes-día, por ejemplo: 2025-10-24.'
        }  
    def clean_fecha_evento(self):
        fecha_evento = self.cleaned_data.get('fecha_evento')
        if fecha_evento:  # comprueba que no sea None
            if fecha_evento < timezone.now().date():
                raise forms.ValidationError("La fecha del evento debe ser posterior a hoy")
        return fecha_evento

class ParticipanteForm(forms.ModelForm):
    class Meta:
        model = Participante
        fields = ['nombre_participante', 'correo']