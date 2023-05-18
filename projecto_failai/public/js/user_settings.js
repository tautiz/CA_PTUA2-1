export class UserSettings {
    constructor() {
        console.log('User setting JS loaded');

        this.defaultExpirationTime = 'Fri, 31 Dec 9999 23:59:59 GMT';
        this.defaultColor = '#813d9c';

        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.changeColorScheme = this.changeColorScheme.bind(this);
        this.saveColor = this.saveColor.bind(this);
        this.setDefaultColor = this.setDefaultColor.bind(this);

        this.initialize();
    }

    initialize() {
        const cookieColorScheme = this.getCookie('colorScheme') || this.defaultColor;
        this.changeColorScheme(cookieColorScheme);

        const saveButton = document.querySelector('#save-color');
        saveButton.addEventListener('click', this.saveColor);

        const defaultButton = document.querySelector('#default-color');
        defaultButton.addEventListener('click', this.setDefaultColor);

        const colorSchemeInput = document.querySelector('#color-scheme');
        colorSchemeInput.addEventListener('input', this.changeColorScheme);

        colorSchemeInput.value = cookieColorScheme || this.defaultColor;
    }

    setCookie(key, value, date) {
        document.cookie = `${key}=${value}; SameSite=None; Expiration=${date}`;
    }

    getCookie(key) {
        const cookie = document.cookie || '';
        const cookieData = cookie.match(new RegExp(`(^| )(?<key>${key})=(?<value>[^;]+)`));
        return cookieData ? cookieData.groups.value : null;
    }

    changeColorScheme(color) {
        if (typeof color === 'object') {
            color = color.target.value;
        }

        document.body.style.backgroundColor = color;
    }

    saveColor() {
        const colorScheme = document.querySelector('#color-scheme').value;
        this.setCookie('colorScheme', colorScheme, this.defaultExpirationTime);
    }

    setDefaultColor() {
        this.setCookie('colorScheme', this.defaultColor, this.defaultExpirationTime);
        this.changeColorScheme(this.defaultColor);
    }
}
