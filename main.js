const handlePlayAudio = () => {
  const audio = document.querySelector("audio");
  audio.play();
};

const handlePauseAudio = () => {
  const audio = document.querySelector("audio");
  audio.pause();
};

const swiperBoda = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// cuando cargue
document.addEventListener("DOMContentLoaded", () => {
  swiperBoda.slideTo(3); // vaya al tercer slide
});

// Fecha objetivo (02 de junio)
const fechaObjetivo = new Date("2024-06-02T00:00:00");

// Función para actualizar el contador cada segundo
function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  // Convertir la diferencia de milisegundos a días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizar el HTML con el contador
  document.querySelector(".dias h2").innerText = dias;
  document.querySelector(".horas h2").innerText = horas;
  document.querySelector(".minutos h2").innerText = minutos;
  document.querySelector(".segundos h2").innerText = segundos;
  // das, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

  // Si la fecha objetivo ha pasado, mostrar un mensaje
  if (diferencia < 0) {
    document.querySelector(".dias h2").innerText = "00";
    document.querySelector(".horas h2").innerText = "00";
    document.querySelector(".minutos h2").innerText = "00";
    document.querySelector(".segundos h2").innerText = "00";
  }
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
