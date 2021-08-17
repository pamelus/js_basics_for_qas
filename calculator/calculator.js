const { read } = require('fs');

function calculator(number1, number2, operator) {

}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Podaj znak działania (+, -, *, /): ', (operator) => {
    readline.question('Podaj pierwszą liczbę: ', (number1) => {
        readline.question('Podaj drugą liczbę: ', (number2) => {
            readline.close();
            console.log('Wynik: ', calculator(parseInt(number1), parseInt(number2), operator));
        })
    })
});