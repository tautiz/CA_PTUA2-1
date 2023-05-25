export class Router {
    constructor() {
        this.path = window.location.pathname;
    }

    // Funkcija, kuri apdoroja maršrutus
    handleRoutes() {
        if (this.path === '/') {
            this.loadPage('index');
        } else if (this.path === '/cv') {
            this.loadPage('cv');
        } else if (this.path === '/kontaktai') {
            this.loadPage('kontaktai');
        } else if (this.path === '/portfolio') {
            this.loadPage('portfolio');
        } else if (this.path === '/admin') {
            this.loadPage('admin');
        } else {
            this.loadPage('404');
        }
    }

    // Funkcija, kuri krauna modulį iš HTML failo
    loadPage(page) {
        // TODO: Įkelti puslapį iš HTML failo naudojant jQuery Ajax ar pan.
        // fetch(`${page}.html`)
        //     .then(response => response.text())
        //     .then(html => {
        //         const mainContent = document.querySelector('main');
        //         mainContent.innerHTML = html;
        //     })
        //     .catch(error => {
        //         console.error('Klaida kraunant puslapį:', error);
        //     });
    }
}
export default Router;