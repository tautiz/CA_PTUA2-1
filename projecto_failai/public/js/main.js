import {randomNumber} from "./testas.js";
import {AdminCards} from './Modules/AdminCards.js';
import {UserSettings} from './Modules/UserSettings.js';
import {PortfolioCrud} from "./Modules/PortfolioCrud.js";
import {Storages} from "./Modules/storages.js";
import {Menu} from './Modules/Menu.js';
import Agreements from "./Modules/Agreements.js";
import Requirements from "./Modules/Requirements.js";
import Router from "./app/Router";

window.onload = () => {
    new Requirements();
    new Agreements();
    const router = new Router();
    router.handleRoutes();

    // Instantiate all modules class with the "new" keyword
    new Menu();
    new AdminCards();
    new UserSettings();
    new PortfolioCrud();
    new Storages();

    console.log('Atsitiktinis skaicius: ', Math.round(randomNumber(10)));
};


