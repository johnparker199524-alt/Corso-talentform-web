"use strict";
// ENUM E' UN ENTITA' SOFTWARE CHE SERVE A RAGGRUPPARE COSTANTI
// DEFINITE COME COLORI-IMMAGINI-ECC E POTERLE IMPORTARE
// DOVE MI SERVONO
// DA UN ENUM DEFINENDO LA VARIABILE DI ISTANZA POTRA' ACCEDERE A TUTTE LE SUE COSTANTI
var Color;
(function (Color) {
    Color[Color["Rosso"] = 4] = "Rosso";
    Color[Color["Verde"] = 5] = "Verde";
    Color[Color["Blu"] = 6] = "Blu";
    Color[Color["Rosa"] = 7] = "Rosa";
    Color[Color["Bianco"] = 8] = "Bianco";
    Color[Color["red"] = 9] = "red";
})(Color || (Color = {}));
let colors = Color.red;
console.log(colors);
var Decidere;
(function (Decidere) {
    Decidere["ok"] = "diplomato";
    Decidere["no"] = "rifiutato";
    Decidere["ra"] = "riprova";
    Decidere[Decidere["num"] = 0] = "num";
})(Decidere || (Decidere = {}));
let scelta = Decidere.ok;
console.log(scelta);
scelta = Decidere.num;
console.log(scelta);
// enum Posizione{
//   red =1,
//   rosso,
//   giallo,
//   marone,
// }
// let colori:Posizione = Posizione.giallo;
// console.log(colori);
//crea un enum che stampa i giorni della settimana con un for
// enum Giorni {
//   lunedi,
//   martedi,
//   mercoledi,
//   giovedi,
//   venerdi,
//   sabato,
//   domenica,
// }
// for(let i=0; i<Giorni.domenica; i++){
//     console.log(Giorni[i]);
// }
// console.log(Giorni);
/*
Crea un enum Mese e associa ad ogni mese il numero di giorni. Stampa il numero di giorni di un mese.
*/
var Mese;
(function (Mese) {
    Mese[Mese["GENNAIO"] = 0] = "GENNAIO";
    Mese[Mese["FEBBRAIO"] = 1] = "FEBBRAIO";
    Mese[Mese["MARZO"] = 2] = "MARZO";
})(Mese || (Mese = {}));
// oggetto mese
const giorniMese = {
    [Mese.GENNAIO]: 31,
    [Mese.FEBBRAIO]: 28,
    [Mese.MARZO]: 31
};
let mese = Mese.FEBBRAIO;
console.log("Febbraio ha " + giorniMese[mese] + " giorni.");
