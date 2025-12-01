$(document).ready(function() {
    //formulario de contacto
    $("#contactoForm").on("submit", function(e) {
        e.preventDefault();

        //obetener informacion
        const nombre = $("#nombre").val().trim();
        const correo = $("#correo").val().trim();
        const mensaje = $("#mensaje").val().trim();

        //validacion simple
        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        //validar correo
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            alert("Ingresa un correo válido.");
            return;
        }

        //mensaje exito
        alert("Gracias por contactarnos, " + nombre + ". Te responderemos pronto.");

        //resetear form
        $(this)[0].reset();
    });

    //test de seguridad
    $("#testForm").on("submit", function(e) {
        e.preventDefault();

        const respuestasCorrectas = {
            q1: "no",
            q2: "no",
            q3: "sí"
        };

        let puntaje = 0;
        let totalPreguntas = Object.keys(respuestasCorrectas).length;
        let resultadoTexto = "";

        for (let pregunta in respuestasCorrectas) {
            const respuestaUsuario = $(`input[name='${pregunta}']:checked`).val();
            if (!respuestaUsuario) {
                $("#resultadoTest").text("Por favor responde todas las preguntas.").css("color", "red");
                return;
            }
            if (respuestaUsuario.toLowerCase() === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        }

        resultadoTexto = `Tu puntaje es ${puntaje} de ${totalPreguntas}.`;

        //mensaje con puntaje
        if (puntaje === totalPreguntas) {
            resultadoTexto += " ¡Excelente! Tienes buenos hábitos de seguridad.";
        } else if (puntaje >= totalPreguntas / 2) {
            resultadoTexto += " Bien, pero puedes mejorar tus hábitos de seguridad.";
        } else {
            resultadoTexto += " Necesitas mejorar tus prácticas de seguridad en línea.";
        }

        $("#resultadoTest").text(resultadoTexto).css("color", "green");
    });

    //limpiar test al cerrar el modal
    $('#testModal').on('hidden.bs.modal', function () {
        $("#testForm")[0].reset();        
        $("#resultadoTest").text("");    
    });


    //acordeon
    $(".accordion-button").click(function() {
        $(".accordion-button").removeClass("active-card");
        $(this).addClass("active-card");
    });
});
