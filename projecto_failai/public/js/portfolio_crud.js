export class PortfolioCrud {
    constructor() {
        console.log('Portfolio CRUD JS loaded');

        this.form = document.getElementById('portfolioForm');
        this.tablePreloader = document.getElementById('tablePreloader');
        this.lentele = document.getElementById('portfelioLentele');

        this.rodytiPreloaderi = this.rodytiPreloaderi.bind(this);
        this.sleptiPreloaderi = this.sleptiPreloaderi.bind(this);
        this.gautiVisusPortfelioDuomenis = this.gautiVisusPortfelioDuomenis.bind(this);
        this.generuotiPortfelioLentele = this.generuotiPortfelioLentele.bind(this);
        this.redaguotiPortfelioIrasa = this.redaguotiPortfelioIrasa.bind(this);
        this.istrintiPortfelioIrasa = this.istrintiPortfelioIrasa.bind(this);

        this.initialize();
    }

    initialize() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.rodytiPreloaderi();

            const id = this.form.elements.id.value;
            const title = this.form.elements.title.value;
            const img = this.form.elements.img.value;
            const categories = this.form.elements.categories.value;

            let url = 'http://localhost:81/portfolio';
            let method = 'POST'; // default to POST for creating

            if (id) {
                url += `/${id}`;
                method = 'PUT'; // default to PUT for updating
            }

            const portfolioItem = {
                title: title,
                img: img,
                categories: categories
            };

            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(portfolioItem)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.gautiVisusPortfelioDuomenis();
                })
                .catch(error => console.error('Error:', error));
        });

        this.gautiVisusPortfelioDuomenis();
    }

    rodytiPreloaderi() {
        this.tablePreloader.style.display = 'block';
        this.lentele.style.display = 'none';
    }

    sleptiPreloaderi() {
        this.tablePreloader.style.display = 'none';
        this.lentele.style.display = 'block';
    }

    gautiVisusPortfelioDuomenis() {
        fetch('http://localhost:81/portfolio')
            .then(response => response.json())
            .then(data => {
                this.sleptiPreloaderi();
                this.generuotiPortfelioLentele(data);
            })
            .catch(error => console.error('Klaida:', error));
    }

    generuotiPortfelioLentele(portfolioItems) {
        this.lentele.innerHTML = '';

        const headerRow = this.lentele.insertRow();
        headerRow.insertCell().textContent = 'ID';
        headerRow.insertCell().textContent = 'Pavadinimas';
        headerRow.insertCell().textContent = 'Nuotrauka';
        headerRow.insertCell().textContent = 'Kategorijos';
        headerRow.insertCell().textContent = 'Veiksmai';

        portfolioItems.forEach(item => {
            const eilute = this.lentele.insertRow();
            eilute.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600';

            const IDLangelis = eilute.insertCell();
            const pavadinimoLangelis = eilute.insertCell();
            const nuotraukosLangelis = eilute.insertCell();
            const kategorijuLangelis = eilute.insertCell();
            const veiksmuLangelis = eilute.insertCell();

            IDLangelis.textContent = item.id;
            pavadinimoLangelis.textContent = item.title;
            nuotraukosLangelis.innerHTML = `<img src="${item.img}" alt="${item.title}" width="100" height="100">`;
            kategorijuLangelis.textContent = item.categories;

            const redaguotiMygtukas = document.createElement('button');
            redaguotiMygtukas.textContent = 'Redaguoti';
            redaguotiMygtukas.className = 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800';

            redaguotiMygtukas.addEventListener('click', () => {
                this.redaguotiPortfelioIrasa(item.id);
            });

            const istrintiMygtukas = document.createElement('button');
            istrintiMygtukas.textContent = 'Ištrinti';
            istrintiMygtukas.className = 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900';
            istrintiMygtukas.addEventListener('click', () => {
                this.istrintiPortfelioIrasa(item.id);
            });

            veiksmuLangelis.appendChild(redaguotiMygtukas);
            veiksmuLangelis.appendChild(istrintiMygtukas);
        });
    }

    redaguotiPortfelioIrasa(id) {
        console.log(`Redaguojamas portfelio įrašas su ID: ${id}`);
        fetch(`http://localhost:81/portfolio/${id}`)
            .then(response => response.json())
            .then(data => {
                this.form.elements.id.value = data.id;
                this.form.elements.title.value = data.title;
                this.form.elements.img.value = data.img;
                this.form.elements.categories.value = data.categories;
            })
            .catch(error => console.error('Klaida:', error));
    }

    istrintiPortfelioIrasa(id) {
        this.rodytiPreloaderi();
        let url = 'http://localhost:81/portfolio/' + id;

        fetch(url, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.gautiVisusPortfelioDuomenis();
            })
            .catch(error => console.error('Error:', error));
    }
}
