
// 1 uzduotis
// Pašalinkite pirmus tris elementus iš masyvo aprašyto apačioje ir pakeiskite juos šiais: "Lets", "dance“.
// Sujunkite atnaujinto masyvo elementus į vieną string.

let arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Lets", "dance");

console.log(arr.join(' '));


// 2 uzduotis
// Naudodamiesi concat metodu sujunkite du masyvus ir dar pridėkite prie jų galo string, number ir object:

let first = ['slice', 'splice', 'concat'];

let second = ['push', 'pop', 'shift', 'unshift'];

let var1 = 'length';
let var2 = 7;
let var3 = {subject: 'methods'};

let newArr = first.concat(second).concat(var1).concat(var2).concat(var3);

console.log(newArr);

// 3 uzduotis
// Turime akordų masyvą:
let accords = ["D", "G", "C", "C7", "F"];

// Parašykite kodą, kuris prie akordo (raidės) pridės 7 -> G7. Tačiau jeigu prie akordo 7 jau yra - turime ignoruoti.
// core funkcija kuri eis per array ir grąžins rezultatą(naudoti metoda endsWith() pasigooglinti)
// callback funkcija kuri bus pritaikoma kiekvienam masyvo elementui

// Test array ➞Expected Result
// ["G", "F", "C"] ➞ ["G7", "F7", "C7"
// ["Dm", "G7", "E", "A"] ➞ ["Dm7", "G7", "E7", "A7"]
// ["F", "E", "A7", "Ab7", "Gm7", "C7"] ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

function noteToAccord(element){
    if (element && !element.endsWith('7')) {
        element += 7;
    }
    return element
}

function makeChanges(array, callback) {
    // for (let i = 0; i < array.length; i++) {
    //     let  element = array[i];
    //     array[i] = callback(element);
    // }
    array.forEach(callback)

    console.log(array);
}

makeChanges(accords, noteToAccord);

// 4 uzduiotis
// Turime skaičių masyvą:

let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

// Parašykite funkciją, kuri suks forEach ciklą per masyvą ir sukurs po naują elementą kiekvienai vertei
// su jos indexu ir atspausdins HTML‘e
// Rezultatas:
// <p>Index Nr: 0, value: 5</p>
// <p>Index Nr: 1, value: 1</p>

function spausdintiMasyva(numbers) {
    let contentDiv = document.getElementById('content');
    numbers.forEach((value, index) => {
        let p = document.createElement('p');
        p.textContent = `Index Nr: ${index}, value: ${value}`;
        contentDiv.appendChild(p);
    });
}

spausdintiMasyva(numbers);

// 5 Uzduotis
// Turime skaičių masyvą:

let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];
const budgets = [
    {
        name: "Rytis",
        budget: 50,
    },
    {
        name: "Saulė",
        budget: 230,
    },
    {
        name: "Paulius",
        budget: 1500,
    },
    {
        name: "Gytis",
        budget: 92,
    },
    {
        name: "Sandra",
        budget: 7,
    },
];

// Žemiau yra aprašytos užduotys su aukščiau pavaizduotu masyvu:
// Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
// Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš skaičiaus kuris nurodytas iškviečiant funkciją. Tai reiškia jums reikės paduoti du parametrus į funkciją;
// Parašykite funkciją getBudgets kuri grąžina sumą visų biudžetų; CodePen
// Naudodamiesi map() metodu praeikite pro visą objektą ir sukurkite naują masyvą kuris grąžina tik vardus.

function arrDoubled(numbers) {
    return numbers.map(number => number * 2);
}
console.log(arrDoubled(numbers)); // [10, 2, 14, 4, -18, 16, 4, 14, 18, 8, -10, 4, -12, 16, -8, 12]
// -------------------------
function arrMultiplied(numbers, multiplier) {
    return numbers.map(number => number * multiplier);
}
console.log(arrMultiplied(numbers, 3)); // [15, 3, 21, 6, -27, 24, 6, 21, 27, 12, -15, 6, -18, 24, -12, 18]
// -------------------------
function getBudgets(people) {
    return people.map(person => person.budget).reduce((a, b) => a + b, 0);
}
console.log(getBudgets(budgets)); // 98000
// -------------------------
function getNames(people) {
    return people.map(person => person.name);
}
console.log(getNames(budgets)); // ["John", "Steve", "Martin"]
