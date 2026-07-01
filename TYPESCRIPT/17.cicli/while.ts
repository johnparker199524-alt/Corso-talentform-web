// cicli while

// let iteratore: number = 1;
// while (iteratore <=10) {
//     console.log(iteratore);
//     iteratore++;
// }
// let i: number = 1;
// while (i >= -10) {
//     console.log(i);
//     i--;
// }

// somma dei 100 primi numeri
// let e: number = 1;
// let somma: number =0;
// while (e <= 100) {
//   //  console.log(somma);
//       console.log(`la somma di  ${e} + ${somma}`);

//     somma+=e;
//           console.log(` = ${somma}`);

//     e++;
// }

// stampi lai 20 primi numeri pari

// let p:number =0;
// while( p%2 === 0 && p <=20){
// console.log(`ilnumero ${p} è divisibile per 2`);
// p+=2;
// }

//tabellina di 4

// let num: number = 1;
// let moltiplica:number = 4;

// while(num<=10){

//     console.log(`${moltiplica} x ${num} = ${moltiplica*num} `);
//     num++;
// }



// somma dei numeri dispari fino a 99
// let n1:number = 1;
// let som =0;
// while (n1 < 100 ) {
//     console.log(` la somma di ${n1} + ${som }`)
//     som += n1;
//     console.log(` ${som}`);
//     n1 += 2;

// }

//Esercizio 4 — Fattoriale di 6
// Traccia
// Scrivi un programma che calcoli il fattoriale di 6 usando un ciclo while.
// let numero:number =6;
// let i: number = 1;
// let fattoriale: number =1;
// while (i<=numero) {
 
//     fattoriale*=i
//     i++;

// }
//  console.log(`${fattoriale}`);

//tabellina di 6 al contarrio
// let table:number = 6;
// let i=10;
// while (i>=0) {
//     console.log(`${table} x ${i} = ${table*i}` )
//     i--;

// }

// stampa i moltipli di 7 fino a 70
// let i:number =7;
// while(i<=70){
//  console.log(`il numero  ${i} è un moltiplo di 7` );
// i+=7;
// }

// stampa i divisori di un numero esempio : 12 -> 1.2.3.4.6.12

let div:number =25;
let i:number = 1;
while(i <= div){
    if(div % i === 0){
        console.log(` il numero ${i} è un divisore di ${div}`);
    }
  i++;
}










