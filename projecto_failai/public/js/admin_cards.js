window.onload = () => {
    document.getElementById('cardForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let frontText = document.getElementById('frontText').value;
        let backText = document.getElementById('backText').value;
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push({ frontText, backText });
        localStorage.setItem('cards', JSON.stringify(cards));
        alert('New card added');
    });
}