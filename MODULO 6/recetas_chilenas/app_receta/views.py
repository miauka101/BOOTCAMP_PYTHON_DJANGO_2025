from django.shortcuts import render
from .models import Receta

#muestro la lista de recetas
def index(request):
    recetas = Receta.objects.all()
    return render(request, 'app_receta/index.html', {'recetas': recetas})


#despues de hacer click, se detalla receta
def detalle_receta(request,receta_id):
    receta = Receta.objects.filter(pk=receta_id).first()
    if receta:
        return render(request, 'app_receta/detalle.html', {'receta': receta})
    else:
        # ya que las recetas estan con id=1, id=2, ... , si el usuario coloca /receta/99999 que no existe, muestra mesaje de error
        return render(request, 'app_receta/error-receta.html', {'mensaje': '¡La receta no existe!'}) #mensaje de error


#forms de contacto con mensaje de error, no uso de js
def contacto(request):
    if request.method == "POST": #si usuario envia formulario 
        nombre = request.POST.get("nombre") #se obtiene nombre
        mensaje = request.POST.get("mensaje") #se obtiene mensaje
        
        #si no tiene ni nombre ni mensaje entonces muestra mensaje de error
        if not nombre or not mensaje: 
            error = "¡Debes completar todos los campos antes de enviar el formulario!"
            return render(request, "app_receta/contacto.html", {"error": error}) #crea variable error, vuelve a mostrar la pagina de contacto

        #si coloca todos los datos, se muestra pagina de contacto_exito
        return render(request, "app_receta/contacto_exito.html", {"nombre": nombre})
    
    return render(request, "app_receta/contacto.html") #se ve el formulario cuando se entra por primera vez, vacio 

#entras a pagina estatica de cazuela (si apretas el logo de cazuela)
def cazuela(request):
    return render(request, 'app_receta/cazuela.html')
