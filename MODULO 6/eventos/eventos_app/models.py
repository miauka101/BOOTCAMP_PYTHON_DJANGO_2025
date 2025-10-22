from django.db import models
# Create your models here.
class Registro (models.Model):
    nombre_evento = models.CharField(max_length=100)
    fecha_evento = models.DateField()
    ubicacion = models.CharField(max_length=200, blank=True, null=True)
      
    def __str__(self):
        return self.nombre_evento
   
class Participante (models.Model):
    nombre_participante = models.CharField(max_length=100)
    correo = models.EmailField()
    
    def __str__(self):
        return f"{self.nombre_participante} - {self.correo}"
     
