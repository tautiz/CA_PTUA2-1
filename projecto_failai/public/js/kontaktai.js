const manoForma = document.querySelector('form');

manoForma.addEventListener('submit', function (e) {
    e.preventDefault();
    let vardas = e.target.elements.vardas.value;
    // ??????
    console.log(vardas)
})