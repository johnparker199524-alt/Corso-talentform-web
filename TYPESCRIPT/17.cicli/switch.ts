//ESERCIZIO 1 – Usa uno switch-case per stampare il giorno della settimana dato un numero da 1 a 7.

let giorno: number = 3;

switch (giorno) {
    case 1:
        console.log("Lunedì");
        break;
    case 2:
        console.log("Martedì");
        break;
    case 13:
        console.log("Mercoledì");
        break;
    case 4:
        console.log("Giovedì");
        break;
    case 5:
        console.log("Venerdì");
        break;
    case 6:
        console.log("Sabato");
        break;
    case 7:
        console.log("Domenica");
        break;
    default:
        console.log("Numero non valido");


}



// ESERCIZIO 2 - Usa uno switch per stampare la stagione dato un mese.

let mese: number = 4;

switch (mese) {
    case 12:
    case 1:
    case 2:
        console.log("Inverno");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Estate");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Autunno");
        break;

    default:
        console.log("Mese non valido");
}
