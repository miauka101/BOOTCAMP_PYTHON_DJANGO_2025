//libros
const libros = [
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", genero: "Ficción", sinopsis: "Una historia poética sobre un pequeño príncipe y sus viajes." },
    { titulo: "Clean Code", autor: "Robert C. Martin", genero: "Programación", sinopsis: "Una guía para escribir código limpio y mantenible." },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", sinopsis: "Una saga familiar ambientada en el mítico pueblo de Macondo." }
];

//muestra libros buscado
function mostrarLibros(filtrados = libros) {
    const lista = document.getElementById("listaLibros");
    const contador = document.getElementById("contadorLibros");

    lista.innerHTML = "";

    filtrados.forEach(libro => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Género:</strong> ${libro.genero}</p>
            <p>${libro.sinopsis}</p>
        `;
        lista.appendChild(card);
    });

//mostrar contador solo si hay en la busqueda
    if (filtrados.length !== libros.length) {
        contador.style.display = "block";
        contador.textContent = `Total de resultados: ${filtrados.length}`;
    } else {
        contador.style.display = "none";
    }
}

//buscar libros
function buscarLibros() {
    const texto = document.getElementById("busqueda").value.toLowerCase();

    const filtrados = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto) ||
        libro.genero.toLowerCase().includes(texto)
    );

    mostrarLibros(filtrados);
}

//validacion de registro
function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensajeRegistro");

    if (!nombre || !correo || !contrasena) {
        mensaje.style.color = "red";
        mensaje.textContent = "Todos los campos son obligatorios";
    } else {
        mensaje.style.color = "green";
        mensaje.textContent = "Registro exitoso";
    }
}

//mostrar libros al cargar
mostrarLibros();
