"use strict";
/*
Traccia
Un hotel registra le prenotazioni.
Crea un'interfaccia IPrenotazione contenente:
•	cliente;
•	numeroNotti;
•	metodo calcolaCosto().
Successivamente crea una classe PrenotazioneHotel.
Ogni notte costa 80 €.
Il metodo deve restituire il costo totale della prenotazione.

*/
//modello base di implementazione  per ogni classe che dovra seguire
// una classe che implementa questa interface
class NoleggioAuto {
    modello;
    giorni;
    // Rendiamo la tariffa esplicita e non modificabile
    TARIFFA_GIORNALIERA = 45;
    constructor(modello, giorni) {
        this.modello = modello;
        this.giorni = giorni;
    }
    calcolaTotale() {
        return this.giorni * this.TARIFFA_GIORNALIERA;
    }
}
let auto = new NoleggioAuto("Jeep-Wrangler", 15);
console.log(`
              ****** Noleggio Auto *** John Parker Moise *******
        
               Modello Scelto : ${auto.modello}
                       Durata : ${auto.giorni}  Giorni
                 Costo Totale : ${auto.calcolaTotale()}.00 €`);
