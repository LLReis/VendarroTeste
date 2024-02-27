const cardCarContainer = document.getElementById('carCardsContainer');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');

function openModal(carModel) {
    modalContent.innerHTML = `
        <h2>${carModel.nome}</h2>
        <img src="${carModel.imagem}" alt="${carModel.nome}">
        <p>Valor: ${carModel.valor}</p>
        <p>${carModel.descricao}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

cardCarContainer.addEventListener('click', event => {
    const clickedElement = event.target.closest('.card');
    if (clickedElement) {
        const carModel = carModels.find(car => car.nome === clickedElement.dataset.nome);
        openModal(carModel);
    }
});

modal.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
});

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);