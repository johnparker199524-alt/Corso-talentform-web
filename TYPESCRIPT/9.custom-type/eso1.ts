// type Prova = (a: number, b: number) => number;

// let som: Prova = (a, b) => {
//   return a + b;
// };

// console.log(som(5,2));

// type Stringa = (s:string, ss:string) => string;

// let concat: Stringa =(x,y) =>  {

//    return x+y;
// }
// console.log(concat("ciao ", "buonggiorno"));
//crea un custom function che moltiplica due numeri
type Moltiplica = (x: number, y: number) => number;
let moltiplicazione: Moltiplica = (a, b) => {
  return a * b;
};
console.log(moltiplicazione(5, 2));

//====================
// type Vero = string|boolean;
// let  esiste: Vero = true;
// console.log(esiste);
//  esiste ="vero";
//  console.log(esiste);
//Crea un custom type Piattaforma che accetti
//  solo tre stringhe
// esatte: "PlayStation", "Xbox" o "PC".

// type Piattaforma = "PlayStation" | "Xbox" | "PC";

// let product: Piattaforma = "PlayStation";
// console.log(product);

// //Crea un custom type Videogioco che sia un oggetto con
// // queste proprietà:
// //titolo (stringa)
// //prezzo (numero)
// //piattaforma (deve usare il tipo Piattaforma creato al punto 1)

// type Videogioco = {
//   titolo: string;
//   prezzo: number;
//   piattaforma: Piattaforma;
// };

// let model: Videogioco = {
//   titolo: "God Of War",
//   prezzo: 400,
//   piattaforma: "PC",
// };
// let model2: Videogioco = {
//   titolo: "War2",
//   prezzo: 500,
//   piattaforma: "Xbox",
// };
// console.log(model);

// /* traccia */
// // crea un custom che  rappresenta una funzione che
// // riceve un numero e restituisce true
// //se è pari

// // type Parita = ( x:number)=>boolean;

// //     let control:Parita = (a)=>{

// //         return a%2 == 0 ;
// //     }

// //     console.log(control(2));
// // console.log("=========true pari============")

// //Crea un custom type Carrello che sia un oggetto con:

// //utente (stringa)

// //prodotti (un array di oggetti di tipo Videogioco)
// //Crea un oggetto di test chiamato mioCarrello
// //  inserendo due giochi a tua scelta
// // per verificare che TypeScript non ti dia errori.

// type Carello = {
//   utente: string;
//   prodotti: Videogioco[];
// };

// let carello: Carello = {
//   utente: "jack",
//   prodotti: [model, model2],
// };

// console.log(carello);

// // crea un custom che rappresenta una funziona che calcola la media di 3
// // numeri
// // type Media = (x:number, y:number, z: number ) => number;

// //  let calcolo: Media = (a,b,c) =>{
// //     return a+b+c/3;
// //  }

// //  console.log(calcolo(5,10,14));
// console.log("============Eso2=================");

// //Crea un custom type chiamato StatoConnessione che accetti solo
// //  le stringhe: "loading", "success" oppure "error".

// type StatoConnessione = "loading" | "success" | "error";
// let stato: StatoConnessione = "success";

// //Crea una funzione chiamata mostraMessaggio che
// //  accetta un parametro
// // stato di tipo StatoConnessione.

// //Dentro la funzione, usa un costrutto switch o if/else per
// //  stampare con un console.log:Se lo stato è "loading" $\rightarrow$
// // "Caricamento in corso..."Se lo stato è "success" $\rightarrow$
// // "Dati ricevuti con successo!"Se lo stato
// // è "error" $\rightarrow$ "Si è verificato un errore di rete."

// function mostraMessaggio(state: StatoConnessione) {
//   switch (state) {
//     case "loading":
//       console.log("Caricamento in corso...");

//       break;

//     case "success":
//       console.log("Dati ricevuti con successo!");

//       break;

//     case "error":
//       console.log("Si è verificato un errore di rete.");

//       break;

//     default:
//       console.log(" Siamo in manutenzione ...");
//       break;
//   }
// }

// mostraMessaggio("success");

// console.log(")========================(");
// //custom che restituisce una stringa e rinvia la sua lunghezza

// type Lunghezza = (x: string) => number;

// let lunga: Lunghezza = (a) => {
//   return a.length;
// };

// console.log("la lunghezza è : " + lunga("ciao"));

// // crea un custom che rapresenta un oggeto con le proprieta
// // nome e eta citta
// console.log(")============Object ============(");

// type Info = {
//   nome: string;
//   citta: string;
//   eta: number;
// };

// let cittadino: Info = {
//   nome: "Joe",
//   citta: "Como",
//   eta: 25,
// };
// console.log(cittadino);

// // crea un custom type Automobile con marca , modello , anno
// console.log("================== Auto ====================");

// type Automobile = {
//   marca: string;
//   modello: string;
//   anno: number;
// };

// let auto: Automobile = {
//   marca: "Ranger Turbo",
//   modello: "RT-4x4",
//   anno: 2026,
// };
// console.log(auto);
/*
Crea un custom type Dipendente con nome, ruolo
 e telefono opzionale.

Crea un array di oggetti di tipo
 Libro e stampa il titolo di ogni libro.
*/

type Dipendente = {
  nome: string;
  ruolo: string;
  telefono?: number;
};

console.log("================Dipendente==============");
let dipendente1: Dipendente = {
  nome: "mike",
  ruolo: "svillupatore web"
};
console.log(dipendente1);

/*
Crea un array di oggetti di tipo
 Libro e stampa il titolo di ogni libro.
*/

type Libro = {
  
    titolo: string;
    autore: string;
  
}
  


let libro1:Libro [] = [

  {
    titolo: " La vita",
    autore: " Luca"
  },
  {
    titolo: " La mente",
    autore: " john"
  },
  {
    titolo: " storia",
    autore: " ricco"
  }
];

for( let libro of libro1 ){

  console.log(libro.titolo);

}