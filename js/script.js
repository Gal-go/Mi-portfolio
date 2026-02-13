document.addEventListener("DOMContentLoaded", function () {

  const lightbox = document.getElementById("lightbox");
  const imagenGrande = document.getElementById("imagen-grande");

  if (!lightbox || !imagenGrande) return;

  const imagenes = document.querySelectorAll(
    ".galeria-neutro img, .galeria-completa img, .galeria-set img"
  );

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
