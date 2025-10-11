const botonModo = document.getElementById('modoToggle');
const cuerpo = document.body;

botonModo.addEventListener('click', () => {
  cuerpo.classList.toggle('dark');
  if (cuerpo.classList.contains('dark')) {
    botonModo.textContent = '☀️';
  } else {
    botonModo.textContent = '🌙';
  }
});
