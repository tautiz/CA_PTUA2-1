import Api from "./Api.js";

export class Render {
    constructor() {
        this.api = new Api();

    }

    renderView(templateFile, data) {
        this.api.getText(templateFile).then(content => {
            document.querySelector("#app").innerHTML = this.replacePlaceholders(content, data);
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

export default Render;