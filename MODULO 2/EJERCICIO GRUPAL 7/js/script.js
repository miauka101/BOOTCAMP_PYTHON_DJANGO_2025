document.getElementById("formAutoFix").addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const servicio = document.getElementById("servicio").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const fecha = document.getElementById("fecha").value;
    const tarjeta = document.getElementById("tarjeta").value.trim();
    const titular = document.getElementById("titular").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    //validacion de datos
    if(nombre === "" || servicio === "" || fecha === "" || titular === ""){
        alert("Por favor completa todos los campos obligatorios.");
        return;
    }

    //solo numeros con 9 digitos
    const regexTarjeta = /^[0-9]{9}$/;

    if(!regexTarjeta.test(tarjeta)){
        alert("La tarjeta debe contener exactamente 9 números y no debe incluir espacios.");
        return;
    }


    //cvv
    if (!/^[0-9]{3}$/.test(cvv)) {
            alert("El CVV debe tener exactamente 3 números.");
            return;
        }      

    //envio exitoso
    document.getElementById("mensajeExito").innerText =
        "¡Tu solicitud ha sido enviada exitosamente!";

    document.getElementById("formAutoFix").reset();
});
