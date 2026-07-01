// const Objectt:{
// id:number;
// name:string;
// age:number

// } 
//  =
// {
//      id:1,
//      name:'john',
//      age:25

// };

// console.log(Objectt);
// console.log("===========================================");
// console.log( " il numero "+Objectt.id  +" è Il signore " + Objectt.name +" e ha "+ Objectt.age +" anni" );
// 1. Definiamo la struttura (Type) del nostro prodotto
const Prodotto:  {
    id: number;
    codiceProdotto: string;
    quantitaDisponibile: number;
    prezzo: number;
    modello: string;
    marca: string;
}=
{
        id: 1,
        codiceProdotto: "SM-G991B",
        quantitaDisponibile: 15,
        prezzo: 799.99,
        modello: "Galaxy S21",
        marca: "Samsung"
    };
console.log(Prodotto);
// 1. Definiamo la struttura (Type) del nostro prodotto
// type Prodotto = {
//     id: number;
//     codiceProdotto: string;
//     quantitaDisponibile: number;
//     prezzo: number;
//     modello: string;
//     marca: string;
// };
// // 2. Creiamo un oggetto che contiene i 2 prodotti (ad esempio due smartphone)
// const catalogoProdotti: { prodotto1: Prodotto; prodotto2: Prodotto } = {
//     prodotto1: {
//         id: 1,
//         codiceProdotto: "SM-G991B",
//         quantitaDisponibile: 15,
//         prezzo: 799.99,
//         modello: "Galaxy S21",
//         marca: "Samsung"
//     },
//     prodotto2: {
//         id: 2,
//         codiceProdotto: "APL-A2643",
//         quantitaDisponibile: 8,
//         prezzo: 1189.00,
//         modello: "iPhone 13 Pro",
//         marca: "Apple"
//     }
// };

// // 3. Verifichiamo TUTTE le caratteristiche usando il console.log
// console.log("=== VERIFICA CARATTERISTICHE PRODOTTI ===");

// console.log("\n--- PRODOTTO 1 ---");
// console.log("ID:", catalogoProdotti.prodotto1.id);
// console.log("Codice Prodotto:", catalogoProdotti.prodotto1.codiceProdotto);
// console.log("Quantità Disponibile:", catalogoProdotti.prodotto1.quantitaDisponibile);
// console.log("Prezzo:", catalogoProdotti.prodotto1.prezzo + "€");
// console.log("Modello:", catalogoProdotti.prodotto1.modello);
// console.log("Marca:", catalogoProdotti.prodotto1.marca);

// console.log("\n--- PRODOTTO 2 ---");
// console.log("ID:", catalogoProdotti.prodotto2.id);
// console.log("Codice Prodotto:", catalogoProdotti.prodotto2.codiceProdotto);
// console.log("Quantità Disponibile:", catalogoProdotti.prodotto2.quantitaDisponibile);
// console.log("Prezzo:", catalogoProdotti.prodotto2.prezzo + "€");
// console.log("Modello:", catalogoProdotti.prodotto2.modello);
// console.log("Marca:", catalogoProdotti.prodotto2.marca);

// // Metodo bonus: stampa l'intero oggetto strutturato per un controllo rapido
// console.log("\n=== VISIONE GLOBALE DELL'OGGETTO ===");
// console.log(catalogoProdotti);