//formulario contacto
const formulario = document.getElementById("formulario-contacto");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");
const mensajeInput = document.getElementById("mensaje");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let formularioValido = true;

    // Quitamos los espacios al principio y al final
    nombre.value = nombre.value.trim();
    email.value = email.value.trim();
    telefono.value = telefono.value.trim();
    mensaje.value = mensaje.value.trim();

    //limpiar errores previos
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-telefono").textContent = "";
    document.getElementById("error-mensaje").textContent = "";

    // validacion de nombre
    if (nombre.value.length < 3 || nombre.value.length > 50) {
        document.getElementById("error-nombre").textContent =
            "El nombre debe tener entre 3 y 50 caracteres.";
        formularioValido = false;
    }

    // validacion de correo
    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionEmail.test(email.value) || email.value.length > 100) {
        document.getElementById("error-email").textContent =
            "Ingresá un correo electrónico válido.";
        formularioValido = false;
    }

    // validacion de teléfono
    const expresionTelefono = /^\+?[0-9\s()-]+$/;
    const cantidadDigitos = telefono.value.replace(/\D/g, "").length;

    if (
        !expresionTelefono.test(telefono.value) ||
        cantidadDigitos < 8 ||
        cantidadDigitos > 15
    ) {
        document.getElementById("error-telefono").textContent =
            "Ingresá un teléfono válido, con entre 8 y 15 dígitos.";
        formularioValido = false;
    }

    // validacion de   mensaje
    if (mensaje.value.length < 10 || mensaje.value.length > 500) {
        document.getElementById("error-mensaje").textContent =
            "El mensaje debe tener entre 10 y 500 caracteres.";
        formularioValido = false;
    }

    if (formularioValido) {
           const resultado = document.getElementById("resultado-formulario");

    // Limpiamos el resultado anterior
    resultado.textContent = "";

    // Creamos un título
    const titulo = document.createElement("h2");
    titulo.textContent = "Gracias por contactarnos, " + nombre.value + "!" + "a la brevedad nos pondremos en contacto con vos.";

    // Creamos un párrafo para cada dato
    const resumenNombre = document.createElement("p");
    resumenNombre.textContent = "Nombre: " + nombre.value;

    const resumenEmail = document.createElement("p");
    resumenEmail.textContent = "Correo: " + email.value;

    const resumenTelefono = document.createElement("p");
    resumenTelefono.textContent = "Teléfono: " + telefono.value;

    const resumenMensaje = document.createElement("p");
    resumenMensaje.textContent = "Mensaje: " + mensaje.value;

    // Agregamos los elementos a la página
    resultado.appendChild(titulo);
    resultado.appendChild(resumenNombre);
    resultado.appendChild(resumenEmail);
    resultado.appendChild(resumenTelefono);
    resultado.appendChild(resumenMensaje);

    // Limpiamos el formulario
    formulario.reset();
    }

});
