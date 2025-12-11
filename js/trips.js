document.addEventListener("DOMContentLoaded", () => {
  const tripGrid = document.getElementById("tripGrid");
  const filterButtons = document.querySelectorAll(".trip-filter");

  // DATOS DE VIAJES (PUEDES CAMBIAR TEXTOS E IMÁGENES)
  const trips = [
    {
      id: "japon-romantico",
      type: ["pareja", "larga-distancia"],
      title: "Japón romántico: Tokio, Kioto y Hakone",
      image: "../media/images/asia3.jpg",
      alt: "Ciudad japonesa junto a un lago y montañas",
      location: "Tokio · Kioto · Hakone",
      duration: "12 días · 9 noches",
      description:
        "Un recorrido pensado para dos: templos, barrios tradicionales, baños onsen y hoteles boutique con vistas espectaculares.",
      priceFrom: "3.200 €",
      tags: ["En pareja", "Cultura", "Trenes bala"],
    },