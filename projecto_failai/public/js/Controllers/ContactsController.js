import ControllerInterface from "../app/ControllerInterface.js";
import Api from "../app/Api.js";
import Render from "../app/Render.js";

export class ContactsController extends ControllerInterface {
    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    index() {
        this.api.get('/api/contacts').then(data => {
            this.render.renderView('kontaktai.html', data);
        });
    }
}

// Export the Cv class as the default export
export default ContactsController;
