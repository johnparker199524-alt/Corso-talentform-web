"use strict";
// crea un modello oggetto
const pers1 = {
    nome: "john",
    cognome: "parker",
    eta: 25,
    citta: "Como",
    mestiere: "White Hacker",
};
console.log(pers1);
console.log(pers1.nome);
//let nome: string;
//   let cognome: string;
//   let eta: number;
//   let citta: string;
//   let mestiere: string;
function crea(nome, cognome, eta, citta, mestiere) {
    return {
        nome,
        cognome,
        eta,
        citta,
        mestiere
    };
}
const primo = crea('mike', 'bridge', 26, 'isernia', 'hacker');
console.log(primo);
const pers2 = {
    nome: "johny",
    cognome: "park",
    eta: 95,
    citta: "Milan",
    mestiere: "Hacker",
};
console.log(pers2);
console.log(pers2.nome);
