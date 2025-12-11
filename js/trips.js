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
    {
      id: "costa-oeste-familia",
      type: ["familia", "aventura", "larga-distancia"],
      title: "Costa Oeste en familia",
      image: "../media/images/america3.jpg",
      alt: "Carretera junto a un lago entre montañas",
      location: "San Francisco · Yosemite · Los Ángeles",
      duration: "14 días · 11 noches",
      description:
        "Ruta flexible en coche con niños: parques nacionales, ciudades icónicas y tiempo para disfrutar sin prisas.",
      priceFrom: "2.850 €",
      tags: ["En familia", "Roadtrip", "Parques nacionales"],
    },
    {
      id: "islandia-auroras",
      type: ["aventura", "larga-distancia"],
      title: "Islandia y auroras boreales",
      image: "../media/images/europa6.jpg",
      alt: "Paisaje nevado con montañas y lago",
      location: "Reikiavik · Círculo Dorado · Costa Sur",
      duration: "8 días · 6 noches",
      description:
        "Cascadas, géiseres, paisajes volcánicos y salidas nocturnas en busca de auroras boreales con guías expertos.",
      priceFrom: "1.780 €",
      tags: ["Aventura", "Naturaleza", "Invierno"],
    },
    {
      id: "roma-venecia",
      type: ["pareja", "familia"],
      title: "Roma y Venecia a tu ritmo",
      image: "../media/images/europa3.jpg",
      alt: "Ciudad europea a orillas de un lago",
      location: "Roma · Venecia",
      duration: "7 días · 5 noches",
      description:
        "Un clásico europeo con hoteles céntricos, visitas guiadas opcionales y tiempo libre para perderse por sus calles.",
      priceFrom: "980 €",
      tags: ["City break", "Europa", "Gastronomía"],
    },