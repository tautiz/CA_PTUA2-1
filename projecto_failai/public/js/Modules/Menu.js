export class Menu {
    constructor() {
        $.getJSON("meniu.json", (data) => {
            this.generateMenu(data);
        });

        console.info('Menu JS loaded');
    }

    generateMenu(menuList) {
        const navigation = $('body > header > nav');
        navigation.html('');
        const menu = $('<ul>');

        for (let i = 0; i < menuList.length; i++) {

            const meniuItemData = menuList[i];

            const menuItem = $('<li>');
            const link = $('<a>').attr('href', meniuItemData.url).text(meniuItemData.title);

            link.appendTo(menuItem);
            menuItem.appendTo(menu); // arba menu.append(menuItem);
        }

        navigation.append(menu);
    }
}
