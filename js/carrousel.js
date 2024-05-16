const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const commentsContainer = document.querySelector('.comments-container');
const commentCards = document.querySelectorAll('.comment-card');

let currentIndex = 0;
const numCards = commentCards.length;

// Función para avanzar al siguiente comentario
nextBtn.addEventListener('click', () => {
  const cardsToShow = window.innerWidth <= 900 ? 1 : 2; // Mostrar una tarjeta si la pantalla es menor o igual a 900px
  currentIndex += cardsToShow; // Avanzar dependiendo de la cantidad de tarjetas mostradas
  if (currentIndex >= numCards) {
    currentIndex = 0; 
  }
  updateCarousel();
});

// Función para retroceder al comentario anterior
prevBtn.addEventListener('click', () => {
  const cardsToShow = window.innerWidth <= 900 ? 1 : 2; // Mostrar una tarjeta si la pantalla es menor o igual a 900px
  currentIndex -= cardsToShow;
  if (currentIndex < 0) {
    currentIndex = numCards - cardsToShow; 
  }
  updateCarousel();
});

// Función para actualizar la posición del carousel
function updateCarousel() {
  const offset = -currentIndex * (commentCards[0].offsetWidth + 20);
  commentsContainer.style.transform = `translateX(${offset}px)`;
}