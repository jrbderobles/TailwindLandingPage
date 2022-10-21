const menuBtn = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuNav.classList.toggle('flex');
  menuNav.classList.toggle('hidden');
});