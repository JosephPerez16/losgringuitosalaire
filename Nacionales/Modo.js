document.addEventListener('DOMContentLoaded', () => {
  const botonModo = document.getElementById('modoToggle');
  const cuerpo = document.body;

  if (botonModo) {
    botonModo.addEventListener('click', () => {
      cuerpo.classList.toggle('dark');
      botonModo.textContent = cuerpo.classList.contains('dark') ? '☀️' : '🌙';
    });
  }
});
