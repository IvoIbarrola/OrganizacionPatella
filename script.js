AOS.init({
  duration: 1200,
  once: true,
  easing: "ease-in-out",
});

lucide.createIcons();

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
