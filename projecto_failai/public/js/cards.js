export class AdminCards {
    constructor() {
        console.log('Admin cards JS loaded');
        document
            .getElementById('cardForm')
            .addEventListener('submit', this.handleFormSubmit);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const frontText = document.getElementById('frontText').value;
        const backText = document.getElementById('backText').value;
        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push({ frontText, backText });
        localStorage.setItem('cards', JSON.stringify(cards));
        alert('New card added');
    }
}
