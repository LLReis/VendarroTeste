import { createCarCard } from './components/cardCar.js';
import carModels from './data.js'; 

const cardCarContainer = document.getElementById('carCardsContainer');


carModels.forEach(carModel => { 
    const card = createCarCard(carModel);
    card.classList.add('card');
    cardCarContainer.appendChild(card);
});