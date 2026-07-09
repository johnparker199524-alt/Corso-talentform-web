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


/*interface ICorso {

    titolo: string;
    docente: string;

    mostraCorso(): void;

}

class CorsoTypeScript implements ICorso {

    constructor(
        public titolo: string,
        public docente: string
    ) {}

    mostraCorso(): void {

        console.log("Titolo:", this.titolo);
        console.log("Docente:", this.docente);

    }

}

let corso = new CorsoTypeScript(
    "TypeScript Base",
    "Luca Bianchi"
);

corso.mostraCorso();
*/

/*
ESERCIZIO 5 - Gestione degli ordini
Traccia
Un e-commerce gestisce gli ordini dei clienti.
Crea un'interfaccia IOrdine contenente:
•	numeroOrdine; 
•	importo; 
•	metodo calcolaSpedizione(). 
Successivamente crea una classe OrdineExpress che implementa l'interfaccia.
Il metodo deve restituire un costo di spedizione pari a 12 €.
Infine stampa tutte le informazioni dell'ordine.


interface IOrdine{
    numeroOrdine:number; 
	importo:number; 
	 calcolaSpedizione():number;
}

class OrdineExpress implements IOrdine{

    constructor(public numeroOrdine:number, public importo:number){ 
        
    }

 calcolaSpedizione():number{
   
     return this.importo*this.numeroOrdine;

 };
  stampa(){
    console.log(`   L'importo totale è : ${this.calcolaSpedizione()}.00 €`);
  }

}

let order = new OrdineExpress(2,250);
  order.calcolaSpedizione();
  order.stampa();
  */
 interface IOrdine {
    numeroOrdine: number; 
    importo: number; 
    calcolaSpedizione(): number;
}

class OrdineExpress implements IOrdine {

    // Ottimo uso del costruttore compatto!
    constructor(public numeroOrdine: number, public importo: number) {}

    calcolaSpedizione(): number {
        // La traccia chiede un costo fisso di 12 €
        return 12;
    }

    stampa(): void {
        console.log(`--- DETTAGLI ORDINE EXPRESS ---`);
        console.log(`Numero Ordine: # ${this.numeroOrdine}`);
        console.log(`Importo Prodotti: ${this.importo}.00 €`);
        console.log(`Costo Spedizione: ${this.calcolaSpedizione()}.00 €`);
        // Opzionale: possiamo anche mostrare il totale complessivo
        console.log(`Totale Complessivo: ${this.importo + this.calcolaSpedizione()}.00 €`);
    }
}

// Testiamo il codice
let order = new OrdineExpress(125, 250); 
order.stampa();