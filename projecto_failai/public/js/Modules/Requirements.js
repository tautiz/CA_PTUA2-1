export class Requirements {
    constructor() {
        this.checkRequirements();
    }

    checkRequirements() {
        // Let's check if jQuery is installed
        if (typeof jQuery === 'undefined') {
            const message = 'jQuery is not installed.';
            document.body.textContent = message;
            throw new Error(message);
        }
    }
}

export default Requirements;