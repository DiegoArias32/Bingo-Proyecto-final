// Seleccionar el botón por su clase
const reclamarButton = document.querySelector('.reward-button');

// Variable para almacenar el día actual
let currentDay = 1;

// Agregar un event listener al botón
reclamarButton.addEventListener('click', () => {
  // Seleccionar todos los elementos de reward-card
  const rewardCards = document.querySelectorAll('.reward-card');

  // Iterar sobre cada reward-card y cambiar el color del texto de reward-amount si el día es menor o igual al día actual
  rewardCards.forEach((card, index) => {
    if (index < currentDay) {
      const rewardAmount = card.querySelector('.reward-amount');
      rewardAmount.style.color = 'red';
    }
  });

  // Incrementar el día actual
  currentDay++;

  alert(`¡Recompensa reclamada! (Día ${currentDay - 1})`);
});