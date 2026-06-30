"use strict";
//
//ESERCIZIO 4 -  Simula una calcolatrice base con switch (+, -, *, /).
const segno = "-";
let numero1 = 5;
let numero2 = 4;
switch (segno) {
    case "-":
        console.log("sottrazione: " + (numero1 - numero2));
        break;
    case "+":
        console.log("addizione: " + (numero1 + numero2));
        break;
    case "/":
        if (numero2 != 0) {
            console.log("divizione: " + (numero1 / numero2));
        }
        else {
            console.log("divizione: impossibile di dividere per 0 !! ");
        }
        break;
    case "*":
        console.log("moltiplicazione: " + (numero1 * numero2));
        break;
    default:
        console.log("devi scegliere tra gli operatori seguenti : +,*,/,-");
        break;
}
