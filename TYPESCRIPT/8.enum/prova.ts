// ENUM E' UN ENTITA' SOFTWARE CHE SERVE A RAGGRUPPARE COSTANTI
// DEFINITE COME COLORI-IMMAGINI-ECC E POTERLE IMPORTARE
// DOVE MI SERVONO
// DA UN ENUM DEFINENDO LA VARIABILE DI ISTANZA POTRA' ACCEDERE A TUTTE LE SUE COSTANTI

enum Color {
  Rosso = 4,
  Verde,
  Blu,
  Rosa,
  Bianco,
  red,
}

let colors: Color = Color.red;
console.log(colors);

enum Decidere {
  ok = "diplomato",
  no = "rifiutato",
  ra = "riprova",
  num = 0,
}
let scelta: Decidere = Decidere.ok;

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

 enum Mese {
    GENNAIO,
    FEBBRAIO,
    MARZO
}

// oggetto mese
const giorniMese = {
    [Mese.GENNAIO]: 31,
    [Mese.FEBBRAIO]: 28,
    [Mese.MARZO]: 31
};

let mese: Mese = Mese.FEBBRAIO;

console.log("Febbraio ha " + giorniMese[mese] + " giorni.");

