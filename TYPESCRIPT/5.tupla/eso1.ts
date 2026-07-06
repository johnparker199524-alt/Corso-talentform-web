/*
Categoria A: Dati correlati (Coppie/Terzetti a lunghezza fissa)

Esercizio 1: Il Punto nello Spazio 3DCrea una tupla chiamata 
punto3D che rappresenti le coordinate 
$(x, y, z)$ nello spazio. Deve contenere tre numeri. 
Inizializzala con i valori 10, 20 e 30 e stampala.

*/
let punto: [x: number, y: number, z: number];
punto = [10, 20, 30];
console.log("===========1=========");
console.log(punto);
// console.log(punto[0]);
/*
  Esercizio 2: Colore RGB
I colori nei computer si esprimono spesso con una 
terna di numeri (Rosso, Verde, Blu) da 0 a 255. 
Crea una tupla chiamata coloreRosso che accetti 
solo 3 numeri e assegnale il valore 
del rosso puro: [255, 0, 0].

  */
let coloreRosso: [col1: number, col2: number, col3: number];

coloreRosso = [255, 0, 0];
console.log("===========2=========");
console.log(coloreRosso);
//console.log(coloreRosso[1]);

/*
      Categoria B: Array di Tuple (Tabelle di dati veloci)
Esercizio 3: Il Catalogo Prodotti
Crea un array di tuple chiamato carrello. Ogni 
elemento del carrello deve essere una tupla contenente: 
[string, number] (il nome del prodotto e il suo prezzo).
 Popola l'array con almeno 3 prodotti 
(es. "Scarpette", 89) e fai un console.log.
      */

let carello: [nome: string, pezzo: number][];

carello = [
  ["iphone17", 12],
  ["google Pixel", 15],
  ["Pc-Asus", 150],
];
console.log("===========3=========");
//console.log(carello[1][1]);
console.log(carello[2][0]);
console.log(carello);
/*
Esercizio 4: Dizionario di Traduzione Rapido
Crea un array di tuple chiamato dizionario dove ogni elemento 
è una coppia di stringhe: [string, string] 
(parola in italiano, parola in inglese). 
Inserisci elementi come ["gatto", "cat"] 
e ["cane", "dog"]. */

let dizionario: [it:string, en:string][];
dizionario = [
  ["acqua", "water"],
  ["strada", "way"],
  ["soldi", "money"],
];

console.log("===========4=========");
//console.log(dizionario[1][1]);
console.log(dizionario[2][0]);
console.log(dizionario);

/*
  Categoria C: Funzioni che restituiscono più valori

Esercizio 5: Il Risultato della Divisione
Scrivi una funzione chiamata dividi che accetta due numeri
 (dividendo e divisore). La funzione deve
 restituire una tupla di tipo [number, string].

Se il divisore è 0, deve restituire 
[0, "Errore: impossibile dividere per zero"].

Altrimenti, deve restituire [risultato, "Successo"].

Testala usando console.log(dividi(10, 2)). */

function divisi(dividendo: number, divisore: number): [number, string] {
  // dichiarazione delle variabili
  let messagio: [number, string];
  let risultato: number;
  let errore: string;
  let ok: string;

  if (divisore !== 0) {
    //inizializzazione
    risultato = dividendo / divisore;
    ok = "sucesso !!";
    messagio = [risultato, ok];

    return messagio;
  } else {

    risultato = 0;
    errore = "Errore: impossibile dividere per zero";
    messagio = [risultato, errore];

    return messagio;
  }
}
console.log("===========5=========");

console.log(divisi(25,5));
console.log(divisi(25,0));