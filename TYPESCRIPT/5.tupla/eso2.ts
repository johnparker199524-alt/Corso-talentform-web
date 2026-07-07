// //esercizi corso**
// //crea una tupla che rapresenta la citta
// //  e suo cap e stampa
// let citta: [nome:string, codice:number];
// citta = ["torino", 1523];
// console.log("===========1===========");

// console.log(citta);

// // crea una tupla con nome e cognome poi stampa i valori
// console.log("===========2===========");

// let dati:[nome:string, cognome:string];
//   dati = ["Doe", "janes"];

//   console.log(dati);

// crea una tupla con nome e eta
// let info: [nome: string, eta: number];
// info = ["john", 25];
// console.log("===========3===========");

// //  console.log(info);
// info[1] = 26;
// console.log(info);

// // crea una tupla con nome,cogno,eta e stampa
// console.log("===========4===========");

// let persona: [nome: string, eta: number, citta: string];
// persona = ["jonas", 25, "napoli"];
// console.log(persona);

// // crea una tupla che rappresenta un prodoto
// // nome ,prezzo disponibilita
// console.log("===========5===========");

// let prodotto: [nome: string, prezzo: number, esaurito: boolean];

// prodotto = ["apple watch", 250.0, false];

// console.log(prodotto);

// //crea un array di tuple che rappresenta una
// // lista di studenti

// console.log("===========6===========");
// let student: [nome: string, eta: number][];
// student = [
//   ["reacher", 27],
//   ["brad", 28],
//   ["peter", 27],
// ];
// console.log(student);
// // crea una funzione che riceve una tupla e
// // stampa i valori

console.log("===========7===========");

function person(dati: [nome: string, eta: number]): [string, number] {
  console.log(dati[0] + " ha " + dati[1] + " anni");

  return dati;
}
console.log(person(["mike", 25]));

console.log("===========8===========");
//Crea due tuple con nome ed età
// e verifica quale persona è più grande.
let people: [nome:string, eta:number];
let people2: [nome:string, eta:number];

people = ["jack", 25];
people2 = ["reacher", 27];

if (people[1] > people2[1]) {
  console.log(people[0] + " è il maggiore");
} else {
      console.log(people2[0] + " è il maggiore");

}

