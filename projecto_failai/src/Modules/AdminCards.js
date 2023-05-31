import {InitInterface} from "../InitInterface.js";

export class AdminCards extends InitInterface{
    constructor() {
        super();
        console.info('Admin cards JS loaded');
    }

    init(){
        $('cardForm').on('submit', this.handleFormSubmit);
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
