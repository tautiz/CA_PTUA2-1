import Api from "./Api.js";

export default class Render {
    constructor() {
        this.api = new Api();
    }

    renderView(templateFile, data = [], callback = null) {
        this.api.getText(templateFile).then(content => {
            document.querySelector("#apps").innerHTML = this.replacePlaceholders(content, data);
        }).then(() => {
            if (typeof callback == 'function') {
                callback();
            }
        });
    }

    // Function to replace placeholders with dynamic data
    replacePlaceholders(str, obj) {
        const regex = /\[([^\]]+)]/g;
        return str.replace(regex, (_, prop) => {
            let value = obj;
            const props = prop.split('.');
            if (value && value.hasOwnProperty(props[1])) {
                value = value[props[1]];
            } else {
                return ''; // Return an empty string if any property is missing
            }
            return value;
        });
    }
}
