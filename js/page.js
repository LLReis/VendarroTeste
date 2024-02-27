import { createCarCard } from './components/cardCar.js';
import carModels from './data.js'; 

const cardCarContainer = document.getElementById('carCardsContainer');
const searchInput = document.getElementById('searchInput');

function createCarCards(carModels) {
   
    cardCarContainer.innerHTML = '';
    carModels.forEach(carModel => {
        const card = createCarCard(carModel);
        cardCarContainer.appendChild(card);
    });
}

function filterCars(searchText) {
    
    const filteredCars = carModels.filter(car => {
        return car.nome.toLowerCase().includes(searchText.toLowerCase());
    });
    createCarCards(filteredCars);
}

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.trim();
    filterCars(searchText);
});

const searchButton = document.createElement('button');
searchButton.innerHTML = '<img src="" alt="Buscar">';
searchButton.addEventListener('click', () => {
    const searchText = searchInput.value.trim();
    filterCars(searchText);
});
searchInput.parentNode.appendChild(searchButton);

createCarCards(carModels);