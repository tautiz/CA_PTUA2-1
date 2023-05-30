export class PortfolioCrud {
    constructor() {
        this.form = $('#portfolioForm');
        this.tablePreloader = $('#tablePreloader');
        this.lentele = $('#portfelioLentele');

        this.rodytiPreloaderi = this.rodytiPreloaderi.bind(this);
        this.sleptiPreloaderi = this.sleptiPreloaderi.bind(this);
        this.gautiVisusPortfelioDuomenis = this.gautiVisusPortfelioDuomenis.bind(this);
        this.generuotiPortfelioLentele = this.generuotiPortfelioLentele.bind(this);
        this.redaguotiPortfelioIrasa = this.redaguotiPortfelioIrasa.bind(this);
        this.istrintiPortfelioIrasa = this.istrintiPortfelioIrasa.bind(this);

        this.init();

        console.info('Portfolio CRUD JS loaded');
    }

    init() {
        this.form.on('submit', (event) => {
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
                    console.log('DATA',data);
                    this.gautiVisusPortfelioDuomenis();
                })
                .catch(error => console.error('Error:', error));
        });

        this.gautiVisusPortfelioDuomenis();
    }

    rodytiPreloaderi() {
        this.tablePreloader.show();
        this.lentele.hide();
    }

    sleptiPreloaderi() {
        this.tablePreloader.hide();
        this.lentele.show();
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
        this.lentele.html('');

        const headerRow = $('<tr>');
        headerRow.append(($('<th>').text('ID')));
        headerRow.append($('<th>').text('Pavadinimas'));
        headerRow.append($('<th>').text('Nuotrauka'));
        headerRow.append($('<th>').text('Kategorijos'));
        headerRow.append($('<th>').text('Veiksmai'));
        this.lentele.append(headerRow);

        portfolioItems.forEach(item => {
            const eilute = $('<tr>');
            eilute.addClass('bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600');
            eilute.append($('<td>').text(item.id));
            eilute.append($('<td>').text(item.title));
            eilute.append($('<td>').html(`<img src="${item.img}" alt="${item.title}" width="100" height="100">`));
            eilute.append($('<td>').text(item.categories));


            const veiksmuLangelis = $('<td>');

            const redaguotiMygtukas = $('<button>')
                .text('Redaguoti')
                .addClass('text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800')
                .click( () => {
                this.redaguotiPortfelioIrasa(item.id);
            });

            const istrintiMygtukas = $('<button>')
                .text('Ištrinti')
                .addClass('text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900')
                .click(() => {
                this.istrintiPortfelioIrasa(item.id);
            });

            veiksmuLangelis.append(redaguotiMygtukas);
            veiksmuLangelis.append(istrintiMygtukas);
            eilute.append(veiksmuLangelis);
            this.lentele.append(eilute);
        });

        console.log(this.lentele);
    }

    redaguotiPortfelioIrasa(id) {
        console.log(`Redaguojamas portfelio įrašas su ID: ${id}`);
        fetch(`http://localhost:81/portfolio/${id}`)
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const value = data[key];
                        console.log(key, value);
                        this.form.children(`[name="${key}"]`).val(value);
                    }
                }
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
