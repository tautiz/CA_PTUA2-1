import {InitInterface} from '../InitInterface.js';

export class CardReader extends InitInterface {
    constructor() {
        super();
        this.cards = JSON.parse(localStorage.getItem('cards')) || [];
        this.currentCardIndex = 0;
        console.info('Card Reader JS loaded');
    }

    init() {
        $('#flipButton').click(() => {
            let cardFront = $('#cardFront');
            let cardBack = $('#cardBack');

            $(cardFront.parentElement).toggleClass('fliped');

            setTimeout(() => {
                cardFront.toggle();
                cardBack.toggle();
            }, 250)

        });

        $('#nextButton').click(() => {
            this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
            this.displayCard();
        });

        this.displayCard();

        console.info('Card reader Initialized');
    }

    displayCard() {
        let card = this.cards[this.currentCardIndex];
        $('#cardFront').text(card.frontText);
        $('#cardBack').text(card.backText);
    }
}
