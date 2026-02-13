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
  const totalFotos = 10; 
  const prefijo = "yo"; 
  const extension = ".jpg"; 

  const lightbox = document.getElementById("lightbox");
  const imagenGrande = document.getElementById("imagen-grande");

  for (let i = 1; i <= totalFotos; i++) {
    const img = document.createElement("img");
    img.src = `img/${prefijo}${i}${extension}`;
    img.alt = "Este soy yo";
    img.style.cursor = "pointer";

    img.addEventListener("click", function() {
      lightbox.style.display = "flex";
      imagenGrande.src = this.src;
    });

    galeria.appendChild(img);
  }

  lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
  });

});
