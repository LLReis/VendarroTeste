
import carModels from '../data.js';

const cardCarContainer = document.getElementById('carCardsContainer');

carModels.forEach(carModel => { 
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${carModel.imagem}" alt="${carModel.nome}">
        <div class="card-info">
            <h3>${carModel.nome}</h3>
            <p>Valor: ${carModel.valor}</p>
        </div>
    `;
    cardCarContainer.appendChild(card);
});