"use strict";
//map metodo 
// let arr:number[]=[1,2,3,4,5];
// let arrr:number[]= arr.map((valore)=>{
//     return valore*2
// });
// console.log(arrr);
console.log("====================================");
// let arr2:number[]= arrr.map((valore,index,array)=>{
//     let raddopia = valore*2;
//     return raddopia;
// });
// console.log(arr2);
//trasforma un array di minoscolo in maiuscola 
// let array:string[]=["ciao","hello", "martedi"];
// console.log(array);
// let array2:string[]= array.map((valore)=>{
//     return valore.toUpperCase();
// });
// console.log(array2);
// crea un array di nome e poi aggiungi ciao davanti ogni nome
//senza modificare l'array iniziale
// let nomi:string[] = ["john","sara", "mike"];
// let saluto:string[]= nomi.map((nome)=>{
//     return "Ciao "+nome.toUpperCase();
// });
// console.log(saluto);
// converte un arry di numeri in stringa
// let numer:number[]=[1,2,3,4,5];
// let numerString:string[]= numer.map((valore)=>{
//     return ""+valore; // valore.toString()
// });
// console.log(numerString);
// stampa la lunghezza degli ellementi presenti in un arrauy
// let parole:string[]=["ciao","buonggiorno","helloword","javascript"];
// let lungParole:number[]= parole.map((valore)=>{
//     return valore.length;
// });
// console.log(lungParole);
//filter
// let num : number[]=[1,2,3,4,5,6,7,8,9,10];
// let numpari: number[]= num.filter(valore => valore %2 ===0);
// console.log(numpari);
// filtra in un nuovo array i valori maggiore di 5
// let nume : number[]=[1,2,3,4,5,6,7,8,9,10];
// let numeMaggiore5: number[]= nume.filter(valore => valore >5);
// console.log(numeMaggiore5);
//Dato un array di stringhe, utilizza filter() 
// per ottenere solo le parole con più di 5 caratteri.
// let stringhe:string[]=["ciao","lunedi","starda","javaScript","react","helloword"];
// let caratteri5:string[]= stringhe.filter(valore => valore.length >= 5 );
// console.log(caratteri5);
// datto un array di numeri crea un array con valori dispari
// let numm : number[]=[1,2,3,4,5,6,7,8,9,10];
// let dispa: number []=numm.filter(valore => valore %2 !== 0);
// console.log(dispa);
// trova parole che inizia per M
// let parol :string[]=["maria" , "moise", "mike", "gulbert","bickBli"];
// // let m:string[]= parol.filter((valore) => {
// //     if(valore[0]==="m"){
// //         return valore;
// //     }
// // });
// let m: string[] = parol.filter(valore => valore.toLowerCase().startsWith('m'));
// console.log(m);
// dato un array di eta mostra solo quei maggiori di 50
// let eta:number[]=[1,2,10,50,45,96,35,45,55,58,59,60,15,18];
// let cinquanto:number[]=eta.filter(valore => valore>50);
// console.log(cinquanto);
// dato un array trova i valori che termina con a
// let citta:string[]=["antca","romA","isernia","torino", "brescia","milano"];
// let finisceA: string[]=citta.filter(valore=> valore.toLowerCase().endsWith("a"));
// console.log(finisceA);
//Dato un array di numeri, utilizza filter() 
// per creare un nuovo array contenente solo i multipli di 3.
let valori = [1, 2, 3, 4, 5, 10, 12, 15, 20, 25, 33, 30, 40, 90, 93, 130];
let multiplo3 = valori.filter(valore => valore % 3 == 0);
console.log(multiplo3);
