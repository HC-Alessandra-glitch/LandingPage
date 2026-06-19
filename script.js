/* ============================================
   PETITBLOOM — MODA INFANTIL  |  script.js
   ============================================ */

function navigateTo(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(sectionId);
  if (target) { target.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId)) link.classList.add('active');
  });
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');
  const isOpen = menu.classList.toggle('open');
  iconMenu.style.display  = isOpen ? 'none' : 'block';
  iconClose.style.display = isOpen ? 'block' : 'none';
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
    document.getElementById('iconMenu').style.display  = 'block';
    document.getElementById('iconClose').style.display = 'none';
  }
});

function filterProducts(category, btnEl) {
  if (btnEl) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = (category === 'Todos' || card.getAttribute('data-category') === category) ? '' : 'none';
  });
}

function toggleLike(btn) { btn.classList.toggle('liked'); }

function handleContactSubmit(e) {
  e.preventDefault();
  const nombre  = document.getElementById('nombre').value.trim();
  const email   = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  if (!nombre || !email || !mensaje) return;
  const successEl = document.getElementById('formSuccess');
  successEl.style.display = 'block';
  e.target.reset();
  setTimeout(() => { successEl.style.display = 'none'; }, 4500);
}

function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  const msg   = document.getElementById('newsletterMsg');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    msg.style.color = '#E8849A';
    msg.textContent = 'Por favor ingresa un correo válido.';
    return;
  }
  msg.style.color = '#9DD3B8';
  msg.textContent = '¡Gracias! Pronto recibirás novedades.';
  input.value = '';
  setTimeout(() => { msg.textContent = ''; }, 4500);
}

document.getElementById('footerYear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  navigateTo('inicio');
});
