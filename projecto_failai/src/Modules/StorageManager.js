export class StorageManager {
    constructor(storage) {
        this.storage = storage;
        console.info('Storage manager loaded');
    }

// Duomenu saugojimo funkcija
    saveData(key, value) {
        this.storage.setItem(key, value);
    }

// Duomenu nuskaitymo funkcija
    readData(key) {
        return this.storage.getItem(key);
    }
}