import {Menu} from './meniu.js';
import {AdminCards} from './cards.js';
import {UserSettings} from './user_settings.js';
import {PortfolioCrud} from "./portfolio_crud.js";

window.onload = () => {
    // Instantiate all modules class with the "new" keyword
    new Menu();
    new AdminCards();
    new UserSettings();
    new PortfolioCrud();
};
