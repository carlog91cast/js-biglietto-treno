//Il programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
//  chiedo all'utente quanti km vuole percorrere

const userDistance = prompt('inserisci la percorrenza in km');
document.getElementById('go-to').innerHTML = userDistance;
// chiedo all'utente la sua età

const userAge = parseInt (prompt ('inserisci la tua età')) 
document.getElementById('age').innerHTML = userAge;

// ora calcolo il prezzo totale del viaggio

// calcolo il prezzo del biglietto in base ai km (0.21€ al km)

let costoAlKm = 0.21
let ticketPrice = userDistance * costoAlKm;
console.log(ticketPrice);
document.getElementById('prezzo-senza-sconto').innerHTML = ticketPrice;


// const userNumber = parseInt(prompt('Inserisci un numero'));
// const percentage = parseInt(prompt('Inserisci una percentuale'));

// const result = (userNumber * percentage) / 100;

// console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);

// definisco in base all'età dell'utente se esso sia maggiorenne o minorenne

if ( userAge > 18) {
    console.log('è maggiorenne');

} else if ( userAge > 18) {
    console.log('è minorenne')
}

// va applicato ora uno sconto del 20% per i minorenni e del 40% per gli over 65.


// if (eta == "minorenne") {
//     ((ticketPrice / 100) * 80);
//     offerta = "Sconto Minorenne";
//    } else if (eta == "over65") {
//     ((ticketPrice / 100) * 60);
//     offerta = "Sconto Maggiorenne";
//    } else {
//     (ticketPrice);
//    }