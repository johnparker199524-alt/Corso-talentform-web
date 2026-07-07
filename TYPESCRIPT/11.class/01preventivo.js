"use strict";
// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO 
// TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO
//  DI UN SITO
class Fatturazione {
    // proprieta
    frontEnd;
    backEnd;
    testApp;
    configurazione;
    //costruttore
    constructor(front, back, testing, configurazione) {
        this.frontEnd = front;
        this.backEnd = back;
        this.testApp = testing;
        this.configurazione = configurazione;
    }
    //getter & setter
    getAll() {
        return [this.backEnd, this.frontEnd, this.testApp, this.configurazione];
    }
}
// main 
// invocazione
let fattura = new Fatturazione(250, 700, 300, 500);
let tupla;
tupla = fattura.getAll();
console.log(tupla);
