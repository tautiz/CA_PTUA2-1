import {randomNumber} from "./testas.js";
import {Menu} from './Modules/Menu.js';
import Agreements from "./Modules/Agreements.js";
import Requirements from "./Modules/Requirements.js";
import Router from "./app/Router.js";

export default class Main{
    constructor() {
        new Requirements();
        new Agreements();
        const router = new Router();
        router.handleRoutes();

        // Instantiate all modules class with the "new" keyword
        new Menu();

        console.log('Atsitiktinis skaicius: ', Math.round(randomNumber(10)));
    }
}
