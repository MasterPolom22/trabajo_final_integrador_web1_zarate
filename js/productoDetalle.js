const productos = {
    llaveros: {
        titulo: "Llaveros personalizados",
        imagen: "img/producto1.jpg",
        descripcion: "Llaveros personalizados mediante impresión 3D, ideales para regalos, emprendimientos y eventos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};

const botonesDetalles = document.querySelectorAll(".btnDetalles");
const modal = document.getElementById("modalProducto");
const botonCerrar = document.getElementById("cerrarModal");

botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = productos[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagenDetalle").src = producto.imagen;
        document.getElementById("imagenDetalle").alt = producto.titulo;
        document.getElementById("tituloDetalle").textContent = producto.titulo;
        document.getElementById("descripcionDetalle").textContent = producto.descripcion;
        document.getElementById("caracteristicasDetalle").textContent = producto.caracteristicas;

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

        document.getElementById("imagenDetalle").src = producto.imagen;
        document.getElementById("imagenDetalle").alt = producto.titulo;
        document.getElementById("tituloDetalle").textContent = producto.titulo;
        document.getElementById("descripcionDetalle").textContent = producto.descripcion;
        document.getElementById("caracteristicasDetalle").textContent = producto.caracteristicas;

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

        document.getElementById("imagenDetalle").src = producto.imagen;
        document.getElementById("imagenDetalle").alt = producto.titulo;
        document.getElementById("tituloDetalle").textContent = producto.titulo;
        document.getElementById("descripcionDetalle").textContent = producto.descripcion;
        document.getElementById("caracteristicasDetalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});

//medallas

const medallas = {
    medallas: {
        titulo: "Medallas y souvenirs",
        imagen: "img/producto4.jpg",
        descripcion: "Medallas y souvenirs personalizados para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};


botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = medallas[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagenDetalle").src = producto.imagen;
        document.getElementById("imagenDetalle").alt = producto.titulo;
        document.getElementById("tituloDetalle").textContent = producto.titulo;
        document.getElementById("descripcionDetalle").textContent = producto.descripcion;
        document.getElementById("caracteristicasDetalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});

//anime 

const anime = {
    anime: {
        titulo: "Anime y mangas",
        imagen: "img/producto5.webp",
        descripcion: "Colecciones de anime y mangas personalizados para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};


botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = anime[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagenDetalle").src = producto.imagen;
        document.getElementById("imagenDetalle").alt = producto.titulo;
        document.getElementById("tituloDetalle").textContent = producto.titulo;
        document.getElementById("descripcionDetalle").textContent = producto.descripcion;
        document.getElementById("caracteristicasDetalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});


//bustos 

const bustos = {
    bustos: {
        titulo: "Bustos y figuras",
        imagen: "img/imagenCabeza.jpg",
        descripcion: "Bustos y figuras personalizadas para distintos proyectos.",
        caracteristicas: "Personalizables en colores y diseños. Consultá por cantidades y opciones disponibles."
    }
};


botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const codigo = boton.dataset.producto;
        const producto = bustos[codigo];

        if (!producto) {
            return;
        }

        document.getElementById("imagenDetalle").src = producto.imagen;
        document.getElementById("imagenDetalle").alt = producto.titulo;
        document.getElementById("tituloDetalle").textContent = producto.titulo;
        document.getElementById("descripcionDetalle").textContent = producto.descripcion;
        document.getElementById("caracteristicasDetalle").textContent = producto.caracteristicas;

        modal.style.display = "flex";
    });
});

