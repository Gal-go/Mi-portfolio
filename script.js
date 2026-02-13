document.addEventListener("DOMContentLoaded", function () {

  const imagenes = document.querySelectorAll(".galeria-neutro img");
  const lightbox = document.getElementById("lightbox");
  const imagenGrande = document.getElementById("imagen-grande");

  imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", function() {
      lightbox.style.display = "flex";
      imagenGrande.src = this.src;
    });
  });

  lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
  });

});
document.addEventListener("DOMContentLoaded", function () {

  const galeria = document.getElementById("galeria-neutro");
  const totalFotos = 10; // Cambiá esto según cuántas fotos tengas
  const prefijo = "yo"; // El prefijo de tus archivos
  const extension = ".jpg"; // Extensión de tus archivos

  const lightbox = document.getElementById("lightbox");
  const imagenGrande = document.getElementById("imagen-grande");

  // Crear las imágenes automáticamente
  for (let i = 1; i <= totalFotos; i++) {
    const img = document.createElement("img");
    img.src = `img/${prefijo}${i}${extension}`;
    img.alt = "Este soy yo";
    img.style.cursor = "pointer";

    // Click para abrir lightbox
    img.addEventListener("click", function() {
      lightbox.style.display = "flex";
      imagenGrande.src = this.src;
    });

    galeria.appendChild(img);
  }

  // Click en lightbox para cerrar
  lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
  });

});
