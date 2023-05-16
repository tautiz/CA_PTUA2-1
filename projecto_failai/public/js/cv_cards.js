let cards = JSON.parse(localStorage.getItem('cards')) || [];
let currentCardIndex = 0;

function displayCard() {
    let card = cards[currentCardIndex];
    document.getElementById('cardFront').innerText = card.frontText;
    document.getElementById('cardBack').innerText = card.backText;
}

document.getElementById('flipButton').addEventListener('click', function() {
    let cardFront = document.getElementById('cardFront');
    let cardBack = document.getElementById('cardBack');

    cardFront.parentElement.classList.toggle('fliped');

    setTimeout(() => {
        if (cardFront.style.display === 'none') {
            cardFront.style.display = 'block';
            cardBack.style.display = 'none';
        } else {
            cardFront.style.display = 'none';
            cardBack.style.display = 'block';
        }
    }, 250)

});

document.getElementById('nextButton').addEventListener('click', function() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    displayCard();
});

displayCard();