import CvController from "../Controllers/CvController.js";
import Api from "../app/Api.js";

export class Router {
    constructor() {
        this.path = window.location.pathname;
        this.api = new Api();
        console.info('Router loaded: ', this.path);
    }

    // Funkcija, kuri apdoroja maršrutus
    handleRoutes() {
        if (this.path === '/') {
            this.api.loadPage('index');
        } else if (this.path === '/cv') {
            let controller = new CvController();
            controller.index();
        } else if (this.path === '/kontaktai') {
            this.api.loadPage('kontaktai');
        } else if (this.path === '/portfolio') {
            this.api.loadPage('portfolio');
        } else if (this.path === '/admin') {
            this.api.loadPage('admin');
        } else {
            this.api.loadPage('404');
        }
    }
}
export default Router;