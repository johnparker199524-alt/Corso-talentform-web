for (let i = 0; i < 10; i++) {
  let riga = ""; // Qui accumuliamo gli asterischi del turno attuale
let riga2: string ="riga " + i;
  // Il ciclo gira (i + 1) volte:
  // al turno 0 gira 1 volta, al turno 1 gira 2 volte...
  for (let j = 0; j < i + 1; j++) {
    riga += "#"; // Attacca l'asterisco sulla stessa riga
  }
  console.log(riga2); // Stampa la riga completa e va a capo per il prossimo turno

  console.log(riga); // Stampa la riga completa e va a capo per il prossimo turno
}

// for (let i = 20; i >= 1; i-=1) {
//     if(i==6){
//         continue;
//     }

// console.log(i);}

// scrivi un programma che calcola da 1 a 100 con for
// let somma: number =0;

// for(let i = 1; i<=100; i++){
//     somma += i;
//     console.log( "iterazione numero "+ i +" : "+ +somma);

// }
//console.log(somma);

//  moltiplicazione

for (let i = 1; i <= 10; i++) {
  console.log(7 + " x " + i + "  = " + 7 * i);
}
// programma che stampa i numeri pari da 0 a 20
//  for(let i=2; i<=20; i+=2){
//     console.log(i);
//  }
// scrivi un programma che calcola fattoriale 5*4*3*2*1
//     let fattoriale:number =1;
// for(let i=1; i<=5; i++){
//      fattoriale *=i;
//  console.log(fattoriale);

// }
//    console.log(fattoriale);

// stampa il quadrato  dei numeri da 1 a 10
for (let i = 1; i <= 10; i++) {
    const quadrato = i * i;
    console.log(`${i}^2 = ${quadrato}`); // Più pulito da leggere!
}
// let quadrato: number = 1;
// for (let i = 1; i <= 10; i++) {
//   quadrato = i * i;
//   console.log(i + "^2 = " + quadrato);
// }

// moltipli di 5 da 5 a 100
// Partiamo da 5 e aumentiamo i di 5 a ogni giro (5, 10, 15, 20...)
for (let i = 5; i <= 100; i += 5) {
    console.log(`${i} è un multiplo di 5`);
}
// for (let i = 5; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i + " è un moltiplo di 5");
//   }
// }

// numeri da 1 a 50 divisibili per 3
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log(i + " è divisibile per 3");
  }
}
// scrivi la serie di Fibonarchie dei 12 primi numeri
let a = 0;
let b = 1;

for(let i = 2; i <= 12; i++){
 let prossimo: number = a+b;
     console.log(`il primo numero è : ${a} `);
     console.log(`il secondo numero è : ${b} `);
     console.log(`il prossimo numero è : ${prossimo} `);

    // a = b;
    // b = prossimo;
    [a,b] = [b, a+b];// <=> a=b , b= a+b
    
}

