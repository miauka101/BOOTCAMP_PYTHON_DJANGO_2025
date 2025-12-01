
// contador
let solicitudes = 2;
let conexiones = 500;

const solicitudesTexto = document.getElementById("contador-solicitudes");
const conexionTitulo = document.querySelector(".col-derecha .card:nth-of-type(2) h3");


//solicitud aceptada

function aceptar(idSolicitud) {
    let solicitud = document.getElementById(idSolicitud);

    if (solicitud) {
        const nombre = solicitud.querySelector("span").textContent;
        const avatar = solicitud.querySelector("img").src;

        // agrega a conexiones
        agregarConexion(nombre, avatar);

        //eliminar solicitud
        solicitud.remove();
        solicitudes--;
        conexiones++;

        actualizarContadores();
    }
}


//rechazar solicitud//
function rechazar(idSolicitud) {
    let solicitud = document.getElementById(idSolicitud);

    if (solicitud) {
        solicitud.remove();
        solicitudes--;
        actualizarContadores();
    }
}


//agrega conexiones//
function agregarConexion(nombre, avatar) {
    const listaConexiones = document.querySelector(".col-derecha .card:nth-of-type(2)");

    const nuevaConexion = document.createElement("div");
    nuevaConexion.classList.add("conexion");

    nuevaConexion.innerHTML = `
        <img class="solicitud-avatar" src="${avatar}">
        <span>${nombre}</span>
    `;

    listaConexiones.appendChild(nuevaConexion);
}


function actualizarContadores() {
    solicitudesTexto.textContent = `Solicitudes de Conexión (${solicitudes})`;
    conexionTitulo.textContent = `Tus Conexiones (${conexiones})`;
}



//editando perfil//
function editarPerfil() {
    let nuevoNombre = prompt("Escribe tu nuevo nombre de perfil:");
    if (nuevoNombre && nuevoNombre.trim() !== "") {
        document.getElementById("nombre-perfil").textContent = nuevoNombre;
    }
}


// boton cerrar sesion se prende

const botonCerrar = document.querySelector(".cerrar-sesion");

botonCerrar.addEventListener("mouseover", function () {
    botonCerrar.classList.add("prendido");
});

botonCerrar.addEventListener("mouseout", function () {
    botonCerrar.classList.remove("prendido");
});
