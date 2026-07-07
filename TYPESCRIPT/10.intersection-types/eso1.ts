/*

Esercizio 1 (Mix-in di dati):
Crea un tipo DettagliAuto (con marca: string e modello:
 string) e un tipo SpecificheElettriche 
 (con autonomiaKm: number e capacitaBatteria: number).
  Crea un tipo intersecato AutoElettrica e istanzia
  un oggetto funzionante.
*/

type DettagliAuto ={
    marca : string,
    modello: string
}

type SpecificheElettriche = {

    autonomiaKm : number,
    capacitaBatteria : number
}
type AutoElettrica = DettagliAuto & SpecificheElettriche;
const auto:AutoElettrica = {

    marca: "Ford",
    autonomiaKm : 300,
    modello : "AY-57B",
    capacitaBatteria: 75
}
console.log(auto);
/*
Lo Scenario:
In un e-commerce hai dei prodotti normali. 
Alcuni di questi prodotti, però, sono in sconto 
(hanno una percentuale di sconto e una data di 
scadenza dello sconto). Invece di creare un tipo 
gigante con mille campi opzionali, usiamo l'intersezione.

Richiesta:
Crea un tipo Prodotto con:

id (numero)

nome (stringa)

prezzo (numero)
*/
type Prodottoo = {

    id: number;
    nome: string;
    prezzo: number;
}

let prodotA:Prodottoo = {
    id: 1,
    nome:"tablet",
    prezzo:500
}
/*
Crea un tipo Sconto con:

percentuale (numero, es. 20)

scadeIl (stringa o data)
*/
type Sconto = {
    percentuale : number;
    scadeIl : string|Date;

}

/*
  Crea un terzo tipo chiamato ProdottoInOfferta che
   sia l'intersezione di Prodotto e Sconto.
*/
type ProdottoInOfferta = Prodottoo & Sconto;
/*
Crea un oggetto reale chiamato scarpeScontate 
di tipo ProdottoInOfferta
 compilando tutti i campi necessari.
*/

let scarpeScontate:ProdottoInOfferta ={
    id: 1,
    nome:"tablet",
    prezzo:500,
     percentuale : 5,
    scadeIl : new Date()
};

console.log(scarpeScontate);