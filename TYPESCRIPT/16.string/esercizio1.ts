// concatena 2 string
let string1: string = "ciao ";
let string2: string = "imparo typescript ";
let concat: string = string1 + string2;
console.log(concat);
// calcolare e stampare la lungheza di una stringa
const lunghezza: number = concat.length;
console.log(" la lunghezza della stringa " + concat + " è di : "+ lunghezza);
// converzione di una stringa minoscola in maioscola
let maioscola: string = concat.toLocaleUpperCase();
console.log(maioscola);
// converzione sia maioscola sia minoscola
let control: string = "CIAO";

// Confrontiamo se la stringa originale è UGUALMENTE IDENTICA alla sua versione in maiuscolo
if (control === control.toUpperCase()) {
    // Se è già tutta in maiuscolo, la stampiamo in minuscolo
    console.log(control.toLowerCase()); 
} else if (control === control.toLowerCase()) {
    // Se è tutta in minuscolo, la stampiamo in maiuscolo
    console.log(control.toUpperCase());
}