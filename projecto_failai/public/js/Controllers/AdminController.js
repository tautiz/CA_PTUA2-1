import ControllerInterface from "../app/ControllerInterface.js";
import Api from "../app/Api.js";
import Render from "../app/Render.js";
import {UserSettings} from "../Modules/UserSettings.js";

export default class AdminController extends ControllerInterface {
    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    index() {
        this.render.renderView('admin.html', [], () => {
            let userSettings = new UserSettings();
            userSettings.init();
        });

    }

}
