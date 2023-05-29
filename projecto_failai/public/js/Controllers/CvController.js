import ControllerInterface from "../app/ControllerInterface.js";
import Api from "../app/Api.js";

export class CvController extends ControllerInterface {

    index() {
        console.log('Cv index');

        let api = new Api();

        api.getText('cv.html').then(data => {
            const mainContent = document.querySelector('main');
            mainContent.innerHTML = data;
        });
    }
}

// Export the Cv class as the default export
export default CvController;
