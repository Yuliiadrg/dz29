const lights = document.querySelectorAll('.light'); //  всі елементи з класом light
const changeBtn = document.getElementById('change-btn'); // оголошую кнопку Змінити колір
let currentLightIndex = 0; // змінна для індексу світлового сигналу

changeBtn.addEventListener('click', () => { // обробник події click до кнопки Змінити колір
  lights[currentLightIndex].classList.remove('active'); // видаляю клас active 
  currentLightIndex = (currentLightIndex + 1) % lights.length; // індекс змін сигналу
  lights[currentLightIndex].classList.add('active'); // повертаю active до потрібного сигналу
});

