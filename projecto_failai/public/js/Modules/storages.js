import {StorageManager} from "./StorageManager.js";

export class Storages {
    constructor() {
        // 1 Uzdavinys
        // * Sukuriame formą su vienu input type text, h2 elementą formoje ir submit mygtuką.
        // * JS apsirašome keyboard event, kad atleidus klaviatūros mygtuką iškarto būtų
        //    atvaizduojamas vedamas tekstas ir nereiktų spausti Save. (keyup event).
        // * Submit mygtukui reikia apsirašyti atskirą event, kad visa informacija
        //    išsisaugotų LocalStorage.
        // * BONUS: Saugoti teksta I localStorage praėjus 2 sekundem su onBlur eventu

        this.storageManager = new StorageManager(localStorage);

        this.timer = null; // Globale deklaruojame timerio kintamajį
        this.duomenysInput = $('#duomenys');

        $('#store_data').click(() => {this.storageManager.saveData('manoRaktas', this.duomenysInput.value)})
        $('#read_data').click(() => {this.duomenysInput.value = this.storageManager.readData('manoRaktas')});
        this.duomenysInput.on('blur', this.handleBlur);
        this.duomenysInput.on('focus', this.handleFocus);

        console.info('Storages JS loaded');
    }

// Funkcija, kuri bus iškviečiama kai kursorius pašalinamas iš laukelio
    handleBlur() {
        clearTimeout(this.timer); // Išvalome ankstesnį timerį (jei buvo nustatytas)

        // Nustatome naują timerį
        this.timer = setTimeout(() => {
            // Iškviečiame funkciją po 3 sekundžių
            this.storageManager.saveData('manoRaktas', this.duomenysInput.value);
        }, 3000);
    }

// Funkcija, kuri bus iškviečiama kai kursorius fokusuojamas laukelyje
    handleFocus() {
        clearTimeout(this.timer); // Išvalome timerį, jei jis dar nebuvo įvykdytas
    }
}
