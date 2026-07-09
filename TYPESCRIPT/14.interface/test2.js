"use strict";
/*
ESERCIZIO 4 - Gestione dei corsi
Traccia
Una piattaforma e-learning propone diversi corsi.
Crea un'interfaccia ICorso contenente:
•	titolo;
•	docente;
•	metodo mostraCorso().
Successivamente crea una classe CorsoTypeScript che implementa l'interfaccia.
Il metodo deve stampare tutte le informazioni del corso.

*/
class OrdineExpress {
    numeroOrdine;
    importo;
    constructor(numeroOrdine, importo) {
        this.numeroOrdine = numeroOrdine;
        this.importo = importo;
    }
    calcolaSpedizione() {
        return this.importo * this.numeroOrdine;
    }
    ;
    stampa() {
        console.log(`   L'importo totale è : ${this.calcolaSpedizione()}.00 €`);
    }
}
let order = new OrdineExpress(2, 250);
order.calcolaSpedizione();
order.stampa();
