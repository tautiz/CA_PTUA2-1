export default class Portfolio {
    constructor() {
        this.darbaiElement = document.querySelector('.darbai');
        this.darbai = document.getElementsByClassName('darbas');
        this.favDialog = document.getElementById('favDialog');
        this.closeBtn = this.favDialog.querySelector('dialog > [title="Close"]');
        this.filerForm = document.querySelector('form');
    }

    init() {
        this.generatePortfolio();
        // Dialogo uždaryui mygtuko "Close" įvykio registravimas
        this.closeBtn.addEventListener('click', this.closeModal);

        // Modalo uždarymas kai paspaudžiama už jo ribų.
        this.favDialog.addEventListener("click", e => {
            const dialogDimensions = this.favDialog.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                this.favDialog.close()
            }
        })

        // Su kiekvienu galerijos darbo elementu sukamas ciklas ir jam regisruojamas įvykio klausytojas
        for (let darbas of this.darbai) {
            darbas.addEventListener('click', this.loadImageAndShowDModal);
        }

        const sachmatai = $('.sachmatai > div');

        sachmatai.removeClass('zoomed');
        sachmatai.click((e) => {
            sachmatai.removeClass('zoomed');
            $(e.target).toggleClass('zoomed');
        })

        this.filerForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    generatePortfolioElement(data) {
        let div = document.createElement('div');
        div.className = 'darbas ' + data.categories
        let img = document.createElement('img');
        let span = document.createElement('span');
        img.src = `${data.img}?random=${this.getRandomNumber()}`;
        img.alt = data.title;
        span.textContent = data.title;

        div.append(img);
        div.append(span);

        return div;
    }

    async getPortfolioData() {
        try {
            const response = await fetch('http://localhost:81/portfolio');
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async generatePortfolio(category = null) {
        this.darbaiElement.innerHTML = '';
        let portfolioData = await this.getPortfolioData();
        portfolioData.forEach((item) => {
            if (category == null || item.categories.includes(category)) {
                let portfolioElement = this.generatePortfolioElement(item);
                this.darbaiElement.append(portfolioElement);
            }
        });
    }

    loadImageAndShowDModal(event) {
        // Čia nusprendžiame iš kur imsime padidintą foto variantą

        // Iš Evento išraukiame elementą ant kurio katik paspaudėme
        // let element = event.target;
        // let imagePath = element.getAttribute('src');

        // Ar tiesiog nurodome foto adresą kaip konstantą
        let imagePath = `https://picsum.photos/400/600?random=${this.getRandomNumber()}`;

        let image = this.favDialog.querySelector('img');

        image.src = imagePath; // Pakeičiame paveikslelio kelia į naują

        this.favDialog.showModal(); // Dialogo parodymas
    }

    closeModal(event) {
        event.preventDefault(); // Nes mes nenorime išsiūsti duomenų su galima forma
        this.favDialog.close(); // Dialogo uždarymas.
    }

    handleFormSubmit(e, thisArg = this) {
        e.preventDefault();
        let selectedCategory = e.target.elements.category.value;
        thisArg.generatePortfolio(selectedCategory);
    }
}
