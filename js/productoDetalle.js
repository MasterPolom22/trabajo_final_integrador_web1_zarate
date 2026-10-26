const productos = {
    llaveros: {
        titulo: "Llaveros personalizados",
        imagen: "img/producto1.jpg",
        descripcion: "Llaveros personalizados mediante impresión 3D, ideales para regalos, emprendimientos y eventos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};

const botonesDetalles = document.querySelectorAll(".btn-detalles");
const modal = document.getElementById("modal-producto");
const botonCerrar = document.getElementById("cerrar-modal");

botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = productos[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagen-detalle").src = producto.imagen;
        document.getElementById("imagen-detalle").alt = producto.titulo;
        document.getElementById("titulo-detalle").textContent = producto.titulo;
        document.getElementById("descripcion-detalle").textContent = producto.descripcion;
        document.getElementById("caracteristicas-detalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});

botonCerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

//chops

const productosChops = {
    chops: {
        titulo: "Chops y vasos",
        imagen: "img/producto2.webp",
        descripcion: "Chops y vasos personalizados con diseños realizados mediante impresión 3D.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};


botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = productosChops[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagen-detalle").src = producto.imagen;
        document.getElementById("imagen-detalle").alt = producto.titulo;
        document.getElementById("titulo-detalle").textContent = producto.titulo;
        document.getElementById("descripcion-detalle").textContent = producto.descripcion;
        document.getElementById("caracteristicas-detalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});



//figuras

const figuras = {
    figuras: {
        titulo: "Figuras y decoración",
        imagen: "img/producto3.webp",
        descripcion: "Figuras, objetos decorativos y piezas personalizadas para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};


botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = figuras[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagen-detalle").src = producto.imagen;
        document.getElementById("imagen-detalle").alt = producto.titulo;
        document.getElementById("titulo-detalle").textContent = producto.titulo;
        document.getElementById("descripcion-detalle").textContent = producto.descripcion;
        document.getElementById("caracteristicas-detalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});

