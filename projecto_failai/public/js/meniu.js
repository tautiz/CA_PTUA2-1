const page = window.location.pathname;
console.log(page);
// UNFINISHED....

// if (page){
//     let redir = '404.html'
//     switch (page) {
//         case '/':
//             redir = 'index.html'
//             break;
//         case '/cv':
//             redir = 'cv.html'
//             break
//         case '/portfolio':
//             redir = 'portfolio.html'
//             break;
//         case '/kontaktai':
//             redir = 'kontaktai.html'
//             break;
//     }
//     window.location.href = redir;
// }
let jsonMeniu = '[{"title":"Pradžia", "url":"/"},{"title":"CV", "url":"/cv"},{"title":"Portfolio", "url":"/portfolio"},{"title":"Kontaktai", "url":"/kontaktai"}]';

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