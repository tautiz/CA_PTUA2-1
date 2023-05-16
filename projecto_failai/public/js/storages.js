// 1 Uzdavinys
// * Sukuriame formą su vienu input type text, h2 elementą formoje ir submit mygtuką.
// * JS apsirašome keyboard event, kad atleidus klaviatūros mygtuką iškarto būtų
//    atvaizduojamas vedamas tekstas ir nereiktų spausti Save. (keyup event).
// * Submit mygtukui reikia apsirašyti atskirą event, kad visa informacija
//    išsisaugotų LocalStorage.
// * BONUS: Saugoti teksta I localStorage praėjus 2 sekundem su onBlur eventu
let timer; // Globale deklaruojame timerio kintamajį
const storage = localStorage;

let duomenysInput = document.getElementById('duomenys');

document.getElementById('store_data').addEventListener('click',sendData)
document.getElementById('read_data').addEventListener('click', readData)
duomenysInput.addEventListener('blur', handleBlur);
duomenysInput.addEventListener('focus', handleFocus);

// Duomenu saugojimo funkcija
function sendData() {
    storage.setItem('manoRaktas', duomenysInput.value);
}
// Duomenu nuskaitymo funkcija
function readData() {
    duomenysInput.value = storage.getItem('manoRaktas');
}

// Funkcija, kuri bus iškviečiama kai kursorius pašalinamas iš laukelio
function handleBlur() {
    clearTimeout(timer); // Išvalome ankstesnį timerį (jei buvo nustatytas)

    // Nustatome naują timerį
    timer = setTimeout(() => {
        sendData(); // Iškviečiame funkciją po 3 sekundžių
    }, 3000);
}

// Funkcija, kuri bus iškviečiama kai kursorius fokusuojamas laukelyje
function handleFocus() {
    clearTimeout(timer); // Išvalome timerį, jei jis dar nebuvo įvykdytas
}

