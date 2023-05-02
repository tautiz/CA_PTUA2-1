const page = window.location.pathname;

if (page) {
    let redir = null;

    const pageWithoutExtension = page.replace(/\.html$/, '');

    switch (pageWithoutExtension) {
        case '/':
        case '/index':
            if (page !== '/index.html') {
                redir = 'index.html';
            }
            break;
        case '/cv':
            if (page !== '/cv.html') {
                redir = 'cv.html';
            }
            break;
        case '/portfolio':
            if (page !== '/portfolio.html') {
                redir = 'portfolio.html';
            }
            break;
        case '/kontaktai':
            if (page !== '/kontaktai.html') {
                redir = 'kontaktai.html';
            }
            break;
        case '/404':
            if (page !== '/404.html') {
                redir = '404.html';
            }
            break;
        default:
            redir = '404.html';
            break;
    }
console.log(window.location);
    if (redir) {
        window.location.href = redir;
    }
}


const jsonMeniu = '[{"title":"Pradžia", "url":"/"},{"title":"CV", "url":"/cv"},{"title":"Portfolio", "url":"/portfolio"},{"title":"Kontaktai", "url":"/kontaktai"}]';

let meniuList = JSON.parse(jsonMeniu);

let kurDetiMeniuHTML = document.querySelector('body > header > nav > ul');

kurDetiMeniuHTML.innerHTML = '';

for (let i = 0; i < meniuList.length; i++) {
    let meniuItemData = meniuList[i];
    let klase = meniuItemData.url === page ? 'active' : '';

    // let klase = '';
    // if (meniuItemData.url === page) {
    //     klase = 'active'
    // }
    kurDetiMeniuHTML.innerHTML += "<li class='"+ klase +"'><a href='" + meniuItemData.url + "'>" + meniuItemData.title + "</a></li>"
}