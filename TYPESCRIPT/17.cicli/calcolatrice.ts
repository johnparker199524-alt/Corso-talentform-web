//
//ESERCIZIO 4 -  Simula una calcolatrice base con switch (+, -, *, /).

const segno: string = "/";
let numero1: number = 5;
let numero2: number = 0;
switch (segno) {
  case "-":
    console.log("sottrazione: " + (numero1 - numero2));

    break;
  case "+":
    console.log("addizione: " + (numero1 + numero2));

    break;
  case "/":
    if (numero2 != 0) {
      console.log("divizione: " + numero1 / numero2);
    } else {
      console.log("divizione: impossibile di dividere per 0 !! ");
    }

    break;
  case "*":
    console.log("moltiplicazione: " + numero1 * numero2);

    break;

  default:
    console.log("devi scegliere tra gli operatori seguenti : +,*,/,-");
    break;
}

// scrivi un programma che qualifica in base all'eta

const eta: number = 45;
let biglietto: string;
if (eta <= 18) {
  biglietto = "junior";
} else if (eta > 18 && eta <= 30) {
  biglietto = "middle";
} else {
  biglietto = "senior";
}
switch (biglietto) {
  case "junior":
    console.log("sei Junior");

    break;
  case "middle":
    console.log("sei middle");

    break;
  case "senior":
    console.log("sei senior");

    break;

  default:
    console.log("quanti anni hai?");
    break;
}

//ESERCIZIO 7 -  Usa uno switch per stampare se il mese  ha 31  30 29 o 28 giorni.

let mes: number = 4;

switch (mes) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 giorni");
    break;
  case 2:
    console.log("28-29 giorni");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 giorni");
    break;
  default:
    console.log("mese non valido");
    break;
}

// scrivi un programma che stampa i vuoti
let vuoto: string = "A";

switch (vuoto) {
  case "A":
    console.log("10");
    break;
 
    case "B":
    console.log("8");
    break;

    case "C":
    console.log("7");
    break;
 
    case "D":
    console.log("6");
    break;
 
    case "E":
    console.log("5");
    break;
 
    default:
    console.log("Voto non trovato");
}

