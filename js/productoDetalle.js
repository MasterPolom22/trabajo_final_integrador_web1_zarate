const productos = {
    llaveros: {
        titulo: "Llaveros personalizados",
        imagen: "img/producto1.jpg",
        descripcion: "Llaveros personalizados mediante impresión 3D, ideales para regalos, emprendimientos y eventos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    },

    chops: {
        titulo: "Chops y vasos",
        imagen: "img/producto2.webp",
        descripcion: "Chops y vasos personalizados con diseños realizados mediante impresión 3D.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    },

    figuras: {
        titulo: "Figuras y decoración",
        imagen: "img/producto3.webp",
        descripcion: "Figuras, objetos decorativos y piezas personalizadas para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    },

    medallas: {
        titulo: "Medallas y souvenirs",
        imagen: "img/producto4.jpg",
        descripcion: "Medallas y souvenirs personalizados para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    },

    anime: {
        titulo: "Anime y mangas",
        imagen: "img/producto5.webp",
        descripcion: "Figuras y objetos de anime y manga personalizados.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    },

    bustos: {
        titulo: "Bustos y figuras",
        imagen: "img/imagenCabeza.jpg",
        descripcion: "Bustos y figuras personalizadas para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};

const botonesDetalles = document.querySelectorAll(".btnDetalles");
const modal = document.getElementById("modalProducto");
const botonCerrar = document.getElementById("cerrarModal");

const imagenDetalle = document.getElementById("imagenDetalle");
const tituloDetalle = document.getElementById("tituloDetalle");
const descripcionDetalle = document.getElementById("descripcionDetalle");
const caracteristicasDetalle = document.getElementById("caracteristicasDetalle");

function mostrarDetalles(codigo) {
    const producto = productos[codigo];

    if (!producto) {
        return;
    }

    imagenDetalle.src = producto.imagen;
    imagenDetalle.alt = producto.titulo;
    tituloDetalle.textContent = producto.titulo;
    descripcionDetalle.textContent = producto.descripcion;
    caracteristicasDetalle.textContent = producto.caracteristicas;

    modal.style.display = "flex";
}

function cerrarModal() {
    modal.style.display = "none";
}

botonesDetalles.forEach(function (boton) {
    boton.addEventListener("click", function () {
        mostrarDetalles(boton.dataset.producto);
    });
});

botonCerrar.addEventListener("click", cerrarModal);

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        cerrarModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        cerrarModal();
    }
});