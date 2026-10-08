/*carrusell*/
const imagenes = [
  {
    src: "img/producto1.png",
    alt: "Producto 1 impreso en 3D",
  },
  {
    src: "img/producto2.png",
    alt: "Producto 2 impreso en 3D",
  },
  {
    src: "img/producto3.png",
    alt: "Producto 3 impreso en 3D",
  },
  {
    src: "img/producto4.png",
    alt: "Producto 4 impreso en 3D",
  },
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById("imagen-carrusel");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

function mostrarImagen() {
  imagenCarrusel.src = imagenes[indiceActual].src;
  imagenCarrusel.alt = imagenes[indiceActual].alt;
}

botonSiguiente.addEventListener("click", function () {
  indiceActual++;

  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }

  mostrarImagen();
});

botonAnterior.addEventListener("click", function () {
  indiceActual--;

  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }

  mostrarImagen();
});

setInterval(function () {

    indiceActual++;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    mostrarImagen();

}, 5000);


