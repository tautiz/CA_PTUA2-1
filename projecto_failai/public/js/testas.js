function randomNumber(to) {

    let randomNumber = Math.random();

    let number = randomNumber * to ;

    return number;
}

console.log('Atsitiktinis skaicius: ', Math.round(randomNumber(10)));