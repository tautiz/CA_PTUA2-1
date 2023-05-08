const manoForma = document.querySelector('form');
const output = document.getElementById('output');

manoForma.addEventListener('submit', function (e) {
    e.preventDefault();
    let vardas = e.target.elements.vardas.value;
    let pavarde = e.target.elements.pavarde.value;

    output.style.margin = '5px';
    output.innerHTML = `Vardas: ${vardas} <br>Pavardė: ${pavarde}`;
})