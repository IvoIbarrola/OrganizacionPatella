// 🔍 Detectar mobile
const isMobile = window.innerWidth < 768;

// 🚀 Inicializar AOS optimizado
AOS.init({
  duration: isMobile ? 500 : 800,
  offset: isMobile ? 50 : 100,
  once: true,
  easing: "ease-out-cubic",
  delay: 0,
});

// 🔄 Refrescar AOS al cargar (fix mobile)
window.addEventListener("load", () => {
  AOS.refresh();
});

// 🎯 Inicializar iconos
lucide.createIcons();

// 🔢 Contadores optimizados
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const speed = target / 60; // menos iteraciones = más fluido

  const update = () => {
    if (count < target) {
      count += speed;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
