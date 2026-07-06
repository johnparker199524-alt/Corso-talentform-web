"use strict";
// crea una funzione getnumeri che stampa se un numero 
// è pari o dispari
// function getNumeri(numero:number):void{
//   if(numero % 2 == 0){
//     console.log(numero);
//   }else{
//     console.log("numero dispari : "+ numero);
//   }
// }
// getNumeri(4);
// crea una funzione che restituisce il maggiore tra 2 numeri
// let a:number =5;
// let b:number =55;
// function maggiore(n1:number, n2:number):number{
// let maggiore:number;
//     if(n1>n2){
//         maggiore =n1;
//     }else if(n1==n2){
//         console.log("numeri uguali");
//         return n1;
//     }else{
//       maggiore=n2;
//     }
//   return maggiore;
// }
// console.log(maggiore(a,b));
// funzione che calcola l'area del rettangolo
// let base:number=5;
// let altezza:number=3;
// function areaRettangolo(lung:number, altez:number):number{
//     let area:number = lung*altez;
//     console.log("l'area del rettangolo è : "+area);
//     return area;
// }
// areaRettangolo(base,altezza);
//Crea una funzione fattoriale(n) che calcola
//  il fattoriale di un numero.
// let numero:number =5; //5*4*3*2*1
// function fattoriale (numero:number):number{
//     let fattoriale:number = 1;
//     for(let i:number=1; i<= numero; i++){
//         fattoriale *=i;
//     }
//      // console.log("il fattoriale di "+ numero +" è :"+fattoriale);
//     return fattoriale;
// }
// console.log(fattoriale(5));
// funzione che conta il numero di vocali di una stringa
function contaVocali(Stringa) {
    let count = 0;
    let vocal = "aeoiu";
    let min = Stringa.toLowerCase();
    for (let char of min) {
        if (char.includes(vocal)) {
            count++;
            console.log(char);
        }
    }
    console.log("la stringa " + Stringa + " ha " + count + " vocali");
    return count;
}
contaVocali(" ciao");
// calcola la ritribuzione di un  dipendente aziendale
// function ritibuzione(stipendio:number,ore:number):number{
//     return (stipendio/ore);
// }
// let dato:string = " guadargna : " + ritibuzione(5000,160)+" €";
// console.log(dato);
// //calcola lo stipendio di un dipendente sapendo :
// //ritribuzioneOraria,oreLavorato
// let ritribuzioneOraria:number =ritibuzione(1500,160);
// let oreLavorato:number = 160;
// function stipendio(pagaOra:number,oreLavorato:number):number{
//     return (pagaOra*oreLavorato);
// }
// let stipend:string = " il dipendente guadagna "+stipendio(ritribuzioneOraria,oreLavorato);
// console.log(stipend);
// //calcola le ore in basi alla retribuzione oraria 
// // e lo stipendio
// let lordo:number =1500;
// function orelavorato(ritribuzioneOraria:number,stipendio:number):number{
//     return (stipendio/ritribuzioneOraria);
// }
// let ore:string = "ore: "+orelavorato(ritribuzioneOraria,lordo);
// console.log(ore);
