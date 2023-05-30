import ControllerInterface from "../app/ControllerInterface.js";
import Api from "../app/Api.js";
import Render from "../app/Render.js";
import Portfolio from "../Pages/Portfolio.js";

export default class PortfolioController extends ControllerInterface {
    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    list() {
        this.render.renderView('portfolio.html', [], () => {
            let portfolio = new Portfolio();
            portfolio.init();
        });
    }
}
