$(document).ready(function () {

    //modal con pelicula
    $(".btn-reservar").click(function () {
        let pelicula = $(this).data("peli");
        $("#pelicula").val(pelicula);

        let modal = new bootstrap.Modal("#modalReserva");
        modal.show();
    });

    //confirmar reserva 
    $("#btnConfirmar").click(function () {

        let peli = $("#pelicula").val();
        let hora = $("#horario").val();
        let cant = $("#cantidad").val();
        let tarjeta = $("#tarjeta").val();
        let titular = $("#titular").val();
        let cvv = $("#cvv").val();

        //validacion 
        if (hora === "" || cant === "" || tarjeta === "" || titular === "" || cvv === "") {
            alert("Completa todos los campos.");
            return;
        }

        //cvv
        if (!/^[0-9]{3}$/.test(cvv)) {
            alert("El CVV debe tener exactamente 3 números.");
            return;
        }       
    
        
        $("#detalle").html(`
            <strong>Película:</strong> ${peli} <br>
            <strong>Horario:</strong> ${hora} <br>
            <strong>Entradas:</strong> ${cant} <br>
            <strong>Pago:</strong> Aprobado (Simulado)
        `);

        //cerrar modal
        bootstrap.Modal.getInstance(document.querySelector("#modalReserva")).hide();

        //modal de confirmacion 
        new bootstrap.Modal("#modalConfirmacion").show();

        $("#formReserva")[0].reset();
    });

});
