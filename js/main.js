//Il programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
//  chiedo all'utente quanti km vuole percorrere

const userDistance = prompt('inserisci la percorrenza in km');

// chiedo all'utente la sua età

const userAge = prompt('inserisci la tua età')
document.getElementById('age').innerHTML = userAge;

// ora calcolo il prezzo totale del viaggio

// calcolo il prezzo del biglietto in base ai km (0.21€ al km)

let costoAlKm = 0.21
let ticketPrice = userDistance * costoAlKm;
console.log(ticketPrice);
document.getElementById('prezzo-senza-sconto').innerHTML = ticketPrice;


// const userNumber = parseInt(prompt('Inserisci un numero qualsiasi'));
// const percentage = parseInt(prompt('Inserisci una percentuale'));

// const result = (userNumber * percentage) / 100;

// console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);