//alerta de bienvenida
document.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido a mi portafolio!');
});


//movimiento ligero de fondo al hacer scroll
document.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
});


//animacion al hacer hover en las cards
$(document).ready(function(){
    $('.card').hover(
        function(){
            $(this).animate({ top: '-5px' }, 200);
        }, 
        function(){
            $(this).animate({ top: '0px' }, 200);
        }
    );
});
