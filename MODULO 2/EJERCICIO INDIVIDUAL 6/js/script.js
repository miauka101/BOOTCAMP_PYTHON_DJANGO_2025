$(document).ready(function () {

    let indexActual = 0;
    let imagenes = $(".thumb");

    //abrir modal clickeando miniatura
    $(".thumb").click(function () {
        indexActual = parseInt($(this).attr("data-index"));
        let ruta = $(this).attr("src");
        $("#imgGrande").attr("src", ruta);
        $("#modal").addClass("show");
    });

    //siguiente
    $("#siguiente").click(function () {
        indexActual = (indexActual + 1) % imagenes.length;
        let nuevaRuta = $(imagenes[indexActual]).attr("src");
        $("#imgGrande").fadeOut(150, function () {
            $(this).attr("src", nuevaRuta).fadeIn(150);
        });
    });

    //antes
    $("#anterior").click(function () {
        indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
        let nuevaRuta = $(imagenes[indexActual]).attr("src");
        $("#imgGrande").fadeOut(150, function () {
            $(this).attr("src", nuevaRuta).fadeIn(150);
        });
    });

    //cerrar modal
    $("#cerrar, #modal").click(function () {
        $("#modal").removeClass("show");
    });

    //evito cierre si clickeo la imagen
    $("#modalContent").click(function(e){
        e.stopPropagation();
    });

});
