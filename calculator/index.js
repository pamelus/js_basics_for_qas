const { read } = require('fs');

function calculator(number1, number2, operator) {
    // Zaimplementujcie proszę tą funckję w taki sposób, aby zwracała wynik działania matematycznego 
    // pomiędzy dwoma przekazanymi liczbami. Działanie określa argument "operator".
    // 
    // Operacja matematyczna powinna byc realizowna przez osobna funkcje, musicie wiec napisac funkcje realizujace
    // dodawania, odejmowanie, mnozenie i dzielenie, a nastepnie wywołać je w tej funkcji w zaleznosci od przekazanego operatora.
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