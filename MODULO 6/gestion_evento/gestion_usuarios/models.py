from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    class Meta: 
        permissions = [
            ("crear_evento", "Puede crear eventos"),
            ("editar_evento", "Puede editar eventos"),
            ("eliminar_evento", "Puede eliminar eventos")
        ]

class Evento(models.Model):
    nombre = models.CharField(max_length=100)
    fecha = models.DateField()
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return self.nombre