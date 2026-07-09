"use strict";
/*
ESERCIZIO 3 - Gestione dei documenti
Traccia
Un gestionale deve stampare diversi tipi di documenti.
Crea una classe astratta Documento.
La classe deve contenere:
•	una proprietà titolo;
•	un metodo astratto stampa().
Successivamente crea una classe Fattura.
Quando viene richiamato il metodo stampa() deve comparire:
Stampa della fattura n° 125
la proprieta titolo: string è un parametro del costtrutore
*/
class Documento {
    titolo;
    constructor(titolo) {
        this.titolo = titolo;
    }
}
class Fattura extends Documento {
    constructor(title) {
        super(title);
    }
    stampa() {
        console.log("Stampa della fattura n° 12 : " + this.titolo);
    }
}
let fat = new Fattura("Luglio 2026");
fat.stampa();
/*
ESERCIZIO 2 - Gestione dei pagamenti
Traccia
Un e-commerce permette diversi metodi di pagamento.
Crea una classe astratta Pagamento contenente:
•	il metodo astratto effettuaPagamento(importo:number).
Successivamente crea una classe CartaDiCredito.
Quando viene effettuato il pagamento deve essere stampato:
Pagamento di 250€ effettuato con carta di credito.
Infine crea un oggetto e richiama il metodo. */
// abstract class  Pagamento{
// abstract effettuaPagamento(importo:number):void;
// }
// class CartaDiCredito extends Pagamento{
//     effettuaPagamento(importo:number){
//         console.log(` pagamento riuscito :  ${importo}.00 €`);
//     };
// }
// let ricarica = new CartaDiCredito();
//  ricarica.effettuaPagamento(500);
