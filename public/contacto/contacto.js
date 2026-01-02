// --- MENÚ HAMBURGUESA ---
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("✅ Mensaje enviado.\nEn un proyecto real aquí se conectaría con un backend o Web3Forms.");

    form.reset();
  });
});
