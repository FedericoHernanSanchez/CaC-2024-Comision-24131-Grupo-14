document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const openModalButtons = document.querySelectorAll('.ver-mas');
  const closeModalButton = document.querySelector('.modal-buttons .volver');
  const tallasButtons = document.querySelectorAll('.talla');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; //sacar el scroll
    });
  });

  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; //habilitar el scroll
  });

  
  // Evento para los botones de las tallas del producto
  tallasButtons.forEach(button => {
    button.addEventListener('click', () => {
      tallasButtons.forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });
});
  