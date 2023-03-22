const openModalBtn = document.getElementById('open-modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});