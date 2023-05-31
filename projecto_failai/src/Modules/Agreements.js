export class Agreements {
    constructor() {
        const storage = localStorage;

        // 1 VARIANTAS
        // // Tikriname, ar vartotojas jau sutiko su sąlygomis
        // if (!storage.getItem('consent')) {
        //     // Jei ne, rodyti popup su prašymu sutikti su sąlygomis
        //     let consent = confirm("Do you agree to the terms and conditions?");
        //     if (consent) {
        //         // Jei vartotojas sutinka, išsaugoti sutikimą localStorage
        //         storage.setItem('consent', 'accepted');
        //     }
        // }

        // 2 Variantas
        // Tikriname, ar vartotojas jau sutiko su sąlygomis
        if (!storage.getItem('consent')) {
            // Jei ne, rodyti popup su prašymu sutikti su sąlygomis
            let popup = window.open(
                'http://klasesdarbas.lt/agreement.html',
                "popup",
                "left=200,top=200,width=320,height=65"
            );

            window.addEventListener('message', function (e) {
                console.log('Received message: ', e.data);
                if (e.data.includes('yes')) {
                    storage.setItem('consent', 'accepted');
                }
                popup.close();
            });
        }
    }
}

export default Agreements;