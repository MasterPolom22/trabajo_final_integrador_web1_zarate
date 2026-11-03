/*carrusell*/
const imagenes = [
  {
    src: "img/banner1.jfif",
    alt: "banner publicitario de productos impresos en 3D",
  },
  {
    src: "img/banner2.png",
    alt: "banner publicitario de productos impresos en 3D",
  },
  {
    src: "img/banner3.png",
    alt: "banner publicitario de productos impresos en 3D",
  },
  {
    src: "img/bannerLogo.png",
    alt: "banner publicitario de productos impresos en 3D",
  },
 
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById("imagenCarrusel");
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

}, 6000);


