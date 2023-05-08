window.onload = () => {
    const darbaiElement = document.querySelector('.darbai');
    const darbai = document.getElementsByClassName('darbas');
    const favDialog = document.getElementById('favDialog');
    const closeBtn = favDialog.querySelector('dialog > [title="Close"]');

    function getRandomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    function generatePortfolioElement(data){
        let div = document.createElement('div');
        div.className = 'darbas ' + data.categories
        let img = document.createElement('img');
        let span = document.createElement('span');
        img.src = `${data.img}?random=${getRandomNumber()}`;
        img.alt = data.title;
        span.textContent = data.title;

        div.append(img);
        div.append(span);

        return div;
    }

    function getPortfolioData() {
        let portfoliojson =  '[{\n' +
            '\t\t"title": "Svetainės dizainas",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "html css"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "JS laikmatis",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "js"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "Vartotojo registracija",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "html css js"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "Python API",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "python"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "MySQL duomenų bazės valdymas",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "mysql"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "CSS animacija",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "html css"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "JS kalbos mokymasis",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "js"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "Knygų katalogas",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "html css js"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "Django svetainė",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "python"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "MySQL duomenų bazės migracija",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "mysql"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "HTML5 video įrašas",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "html css"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "JS kalbos sudėtingesni pavyzdžiai",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "js"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "Knygos rekomendacijos",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "html css js"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "Django vartotojų autentifikacija",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "python"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "MySQL duomenų bazės atsarginė kopija",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "mysql"\n' +
            '\t},\n' +
            '\t{\n' +
            '\t\t"title": "CSS grafinis meniu",\n' +
            '\t\t"img": "https://picsum.photos/200/300",\n' +
            '\t\t"categories": "css"\n' +
            '\t}\n' +
            ']';

        return JSON.parse(portfoliojson);
    }

    function generatePortfolio(){
        let portfolioData = getPortfolioData();
        portfolioData.forEach(function(item){
            let darbasElement = generatePortfolioElement(item);
            darbaiElement.append(darbasElement);
        });
    }

    generatePortfolio();

    // Dialogo uždaryui mygtuko "Close" įvykio registravimas
    closeBtn.addEventListener('click', closeModal);

    // Modalo uždarymas kai paspaudžiama už jo ribų.
    favDialog.addEventListener("click", e => {
        const dialogDimensions = favDialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            favDialog.close()
        }
    })

    // Su kiekvienu galerijos darbo elementu sukamas ciklas ir jam regisruojamas įvykio klausytojas
    for( let darbas of darbai) {
        darbas.addEventListener('click', loadImageAndShowDModal);
    }

    function loadImageAndShowDModal(event) {
        // Čia nusprendžiame iš kur imsime padidintą foto variantą

        // Iš Evento išraukiame elementą ant kurio katik paspaudėme
        // let element = event.target;
        // let imagePath = element.getAttribute('src');

        // Ar tiesiog nurodome foto adresą kaip konstantą
        let imagePath = `https://picsum.photos/400/600?random=${getRandomNumber()}`;

        let image = favDialog.querySelector('img');

        image.src = imagePath; // Pakeičiame paveikslelio kelia į naują

        favDialog.showModal(); // Dialogo parodymas
    }

    function closeModal(event) {
        event.preventDefault(); // Nes mes nenorime išsiūsti duomenų su galima forma
        favDialog.close(); // Dialogo uždarymas.
    }

    let elements = document.querySelectorAll('.sachmatai > div');
    for(let item of elements) {
        item.addEventListener('click', function(e){
            for (let elem of elements) {
                if (elem !== e.target) {
                    elem.classList.remove('zoomed');
                }
            }

            e.target.classList.toggle('zoomed');
        })
    }

}
