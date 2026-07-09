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

//modello base di implementazione  per ogni classe che dovra seguire
// una classe che implementa questa interface
 // Interfaccia base
// interface IPrenotazione {
//     cliente: string;       // Cambiato in string per contenere il nome del cliente
//     numeroNotti: number; 
//     calcolaCosto(): number;
// }

// // Classe che implementa l'interfaccia
// class PrenotazioneHotel implements IPrenotazione {

//     // Ottimo uso dello shorthand nel costruttore!
//     constructor(public cliente: string, public numeroNotti: number) {}

//     calcolaCosto(): number {
//         const tariffaGiornaliera = 80;
//         // Il costo totale dipende semplicemente dal numero di notti
//         return this.numeroNotti * tariffaGiornaliera;
//     }
// }

// // Istanza della classe (Passiamo il nome del cliente e il numero di notti)
// let riserva = new PrenotazioneHotel("Mario Rossi", 3);

// console.log(`**** Riservazione n° xx210 ****
// Il totale della riservazione per il cliente ${riserva.cliente}
// per ${riserva.numeroNotti} notti 
// equivale a: ${riserva.calcolaCosto()}.00 €`);
/*
Traccia
Una società di autonoleggio mette a disposizione diverse automobili.
Crea un'interfaccia INoleggio contenente:
•	modello; 
•	giorni; 
•	metodo calcolaTotale(). 
Successivamente crea una classe NoleggioAuto.
Ogni giorno costa 45 €.
Il metodo deve restituire il costo totale del noleggio.

*/

interface INoleggio{

            modello:string; 
            giorni:number; 
            calcolaTotale():number;
}


class NoleggioAuto implements INoleggio {
    // Rendiamo la tariffa esplicita e non modificabile
    private readonly TARIFFA_GIORNALIERA = 45;

    constructor(
        public modello: string,
        public giorni: number
    ) {}

    calcolaTotale(): number {
        return this.giorni * this.TARIFFA_GIORNALIERA;
    }
}

let auto = new NoleggioAuto("Jeep-Wrangler", 15) ;

    console.log(`
              ****** Noleggio Auto *** John Parker Moise *******
        
               Modello Scelto : ${auto.modello}
                       Durata : ${auto.giorni}  Giorni
                 Costo Totale : ${   auto.calcolaTotale()}.00 €`);
    










