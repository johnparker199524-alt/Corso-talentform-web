"use strict";
// scrivi un programma che conmtrolla se un numero è positivo
function controlNumber(num) {
    if (num >= 0) {
        console.log("il numero " + num + " è positivo");
    }
    else {
        console.log("il numero " + num + " non  è positivo");
    }
    return num;
}
controlNumber(-5);
