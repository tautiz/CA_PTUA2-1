import {InitInterface} from "../InitInterface.js";

export class Menu {
    constructor() {
        const page = window.location.pathname;
        this.loadedModules = {};

        // if (page) {
        //     this.redirectPage(page);
        // }

        $.getJSON("meniu.json", (data) => {
            this.generateMenu(data);
        });

        console.info('Menu JS loaded');
    }

    generateMenu(meniuList) {
        const navigation = $('body > header > nav');
        navigation.html('');
        const menu = $('<ul>');

        for (let i = 0; i < meniuList.length; i++) {

            const meniuItemData = meniuList[i];

            const menuItem = $('<li>');
            const link = $('<a>').attr('href', meniuItemData.url).text(meniuItemData.title);

            link.appendTo(menuItem);
            menuItem.appendTo(menu); // arba menu.append(menuItem);
        }

        navigation.append(menu);

        $(document).on("click", "nav a", (e) => {
            e.preventDefault();
            let href = $(e.target).attr('href');
            $('main').load(href + ' main>div');
            this.loadPageModule(href);
        });
    }

    async loadPageModule(href) {
        const moduleName = this.extractFromPath(href);

        if (moduleName) {
            const capitalizedModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
            const modulePath = `../Pages/${capitalizedModuleName}.js`;

            // Check if the module is already loaded
            if (this.loadedModules.hasOwnProperty(moduleName)) {
                const constructor = this.loadedModules[moduleName];

                if (typeof constructor === 'function') {
                    const instance = new constructor();
                    console.debug('Module', instance);

                    if (!InitInterface.prototype.isPrototypeOf(instance)) {
                        console.error('Module [' + capitalizedModuleName + '] is not an instance of InitInterface');
                    }

                    instance.init();
                    console.info('Initialized module: ', capitalizedModuleName);
                } else {
                    console.error('Module [' + capitalizedModuleName + '] is not a constructor function');
                }
            } else {
                try {
                    const module = await import(modulePath);
                    const constructor = module[capitalizedModuleName];

                    if (typeof constructor === 'function') {
                        const instance = new constructor();

                        if (!InitInterface.prototype.isPrototypeOf(instance)) {
                            console.error('Module [' + capitalizedModuleName + '] is not an instance of InitInterface');
                        }

                        instance.init();
                        console.info('Initializing module: ', capitalizedModuleName);

                        // Store the module for future reference
                        this.loadedModules[moduleName] = constructor;
                    } else {
                        console.error('Module [' + capitalizedModuleName + '] is not a constructor function');
                    }
                } catch (error) {
                    console.error('Failed to import module [' + capitalizedModuleName + ']', error);
                }
            }
        }
    }

    extractFromPath(path) {
        // Remove leading and trailing slashes
        const trimmedPath = path.replace(/^\/|\/$/g, '');

        // Check if the trimmed path is empty
        if (trimmedPath === '') {
            return null;
        }

        // Split the path by dot (.) to remove file extensions
        const parts = trimmedPath.split('.');

        // Extract the word from the first part
        return parts[0];
    }

    // getRedirectPage(pageWithoutExtension = null) {
    //     let redir = null;
    //     switch (pageWithoutExtension) {
    //         case '/':
    //         case '/index':
    //             if (window.location.pathname !== '/index.html') {
    //                 redir = 'index.html';
    //             }
    //             break;
    //         case '/cv':
    //             if (window.location.pathname !== '/cv.html') {
    //                 redir = 'cv.html';
    //             }
    //             break;
    //         case '/portfolio':
    //             if (window.location.pathname !== '/portfolio.html') {
    //                 redir = 'portfolio.html';
    //             }
    //             break;
    //         case '/kontaktai':
    //             if (window.location.pathname !== '/kontaktai.html') {
    //                 redir = 'kontaktai.html';
    //             }
    //             break;
    //         case '/404':
    //             if (window.location.pathname !== '/404.html') {
    //                 redir = '404.html';
    //             }
    //             break;
    //         case '/admin':
    //             if (window.location.pathname !== '/admin.html') {
    //                 redir = 'admin.html';
    //             }
    //             break;
    //         default:
    //             redir = '404.html';
    //             break;
    //     }
    //
    //     return redir;
    // }
    //
    // redirectPage() {
    //     const pageWithoutExtension = window.location.pathname.replace(/\.html$/, '');
    //
    //     const redir = this.getRedirectPage(pageWithoutExtension);
    //
    //     $('main').load(redir + ' main>div');
    // }
}
