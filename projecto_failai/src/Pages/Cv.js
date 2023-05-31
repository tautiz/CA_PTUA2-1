import { InitInterface } from '../InitInterface.js';
import { CardReader } from "../Modules/CardReader.js";

export class Cv extends InitInterface {
    init() {
        (new CardReader()).init();
    }
}

// Export the Cv class as the default export
export default Cv;
