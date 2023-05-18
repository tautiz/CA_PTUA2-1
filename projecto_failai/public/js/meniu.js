export class Menu {
    constructor() {
        console.log('Menu JS loaded');

        const page = window.location.pathname;

        if (page) {
            this.redirectPage(page);
        }

        const meniuList = this.getMeniuList();

        const kurDetiMeniuHTML = document.querySelector('body > header > nav > ul');

        kurDetiMeniuHTML.innerHTML = '';

        for (let i = 0; i < meniuList.length; i++) {
            const meniuItemData = meniuList[i];
            const klase = meniuItemData.url === page ? 'active' : '';

            kurDetiMeniuHTML.innerHTML += `<li class="${klase}"><a href="${meniuItemData.url}">${meniuItemData.title}</a></li>`;
        }
    }

    getRedirectPage(pageWithoutExtension = null) {
        let redir = null;
        switch (pageWithoutExtension) {
            case '/':
            case '/index':
                if (window.location.pathname !== '/index.html') {
                    redir = 'index.html';
                }
                break;
            case '/cv':
                if (window.location.pathname !== '/cv.html') {
                    redir = 'cv.html';
                }
                break;
            case '/portfolio':
                if (window.location.pathname !== '/portfolio.html') {
                    redir = 'portfolio.html';
                }
                break;
            case '/kontaktai':
                if (window.location.pathname !== '/kontaktai.html') {
                    redir = 'kontaktai.html';
                }
                break;
            case '/404':
                if (window.location.pathname !== '/404.html') {
                    redir = '404.html';
                }
                break;
            case '/admin':
                if (window.location.pathname !== '/admin.html') {
                    redir = 'admin.html';
                }
                break;
            default:
                redir = '404.html';
                break;
        }

        return redir;
    }

    redirectPage() {
        const pageWithoutExtension = window.location.pathname.replace(/\.html$/, '');

        const redir = this.getRedirectPage(pageWithoutExtension);

        if (redir) {
            window.location.href = redir;
        }
    }

    getMeniuJsonString() {
        return '[{"title":"Pradžia", "url":"/"},{"title":"CV", "url":"/cv"},{"title":"Portfolio", "url":"/portfolio"},{"title":"Kontaktai", "url":"/kontaktai"}]';
    }

    getMeniuList() {
        const jsonMeniu = this.getMeniuJsonString();

        return JSON.parse(jsonMeniu);
    }
}
