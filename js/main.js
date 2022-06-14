//Il programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
//  chiedo all'utente quanti km vuole percorrere

const userDistance = prompt('inserisci la percorrenza in km');

// chiedo all'utente la sua età

const userAge = prompt('inserisci la tua età')

// ora calcolo il prezzo totale del viaggio

// calcolo il prezzo del biglietto in base ai km (0.21€ al km)

let costoAlKm = 0.21
let ticketPrice = userDistance * costoAlKm;