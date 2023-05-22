// export class Menu {
//     constructor() {

        const page = window.location.pathname;

        if (page) {
            redirectPage(page);
        }

        $.getJSON( "meniu.json", function( data ) {
            generateMenu(data);
        });

        console.info('Menu JS loaded');
//   }
    function generateMenu(meniuList) {
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

        $(document).on("click","nav a", function (e) {
            e.preventDefault();
            $('main').load($(this).attr('href') + ' main>div');
        });
    }

    function getRedirectPage(pageWithoutExtension = null) {
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

    function redirectPage() {
        const pageWithoutExtension = window.location.pathname.replace(/\.html$/, '');

        const redir = this.getRedirectPage(pageWithoutExtension);

        $('main').load(redir + ' main>div');
    }

// }

