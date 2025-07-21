const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let current = 0;

function showSlide(index) {
  const total = slides.length;
  if (index >= total) current = 0;
  else if (index < 0) current = total - 1;
  else current = index;

  document.querySelector('.slides').style.transform = `translateX(-${current * 100}%)`;
}

next.addEventListener('click', () => showSlide(current + 1));
prev.addEventListener('click', () => showSlide(current - 1));

// Optional: Auto slide
setInterval(() => showSlide(current + 1), 5000);







  const spans = document.querySelectorAll('.foot .cols span');

  spans.forEach(span => {
    span.addEventListener('click', () => {
      const parent = span.parentElement;
      parent.classList.toggle('active');
    });
  });

  // menu bar code

  document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".fa-equals");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
  }
});
