import ControllerInterface from "../app/ControllerInterface.js";
import Api from "../app/Api.js";
import Render from "../app/Render.js";

export default class PortfolioController extends ControllerInterface {
    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    list() {
        try {
            const data = this.api.get('/api/portfolio');
            this.render.renderView('portfolio.html', data);
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
        }
    }
}
