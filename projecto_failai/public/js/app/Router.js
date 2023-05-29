import Api from "./Api.js";

export class Router {
    constructor() {
        this.path = window.location.pathname;
        this.api = new Api();
        console.info('Router loaded: ', this.path);
        this.routes = {
            '/': 'MainController',
            '/cv': 'CvController',
            '/kontaktai': 'ContactsController',
            '/portfolio': 'PortfolioController@list',
            '/admin': 'AdminController'
        };
    }

// Funkcija, kuri apdoroja maršrutus
    async handleRoutes() {
        let controller = null;
        let action = 'index';

        if (this.routes.hasOwnProperty(this.path)) {
            const actionSplit = this.routes[this.path].split('@');
            controller = actionSplit[0];
            action = actionSplit[1] || 'index';
        } else {
            this.api.loadPage('404');
            return;
        }

        if (controller !== null) {
            const module = await import(`../Controllers/${controller}.js`);
            const controllerClass = module.default;
            if (typeof controllerClass === 'function') {
                const instance = new controllerClass();
                if (typeof instance[action] === 'function') {
                    instance[action]();
                } else {
                    console.error(`Action '${action}' is not defined in '${controller}.js'.`);
                }
            } else {
                console.error(`Controller '${controller}.js' does not export a class.`);
            }
        }
    }



}
export default Router;