"use strict";
// let num:number[]=[];
// num.push(1);
// num.push(2);
// console.log(num);
// num.forEach((valore,index,array)=>{
// console.log(valore +" si trova all'indice "+index);
// }
// );
//Calcola la somma di tutti gli
// elementi di un array.
// let arr:number[]=[1,2,3,4,5]
// let somma:number =0;
// for(let i=0; i <arr.length; i++){
//     somma += arr[i];
// }
// console.log(somma);
// media aritmetica di un arra
// let arr1:number[]=[1,2,3,4,5]
// let somma:number =0;
// let media:number =0;
// for(let i=0; i <arr1.length; i++){
//     somma += arr1[i];
// }
// media = somma/(arr1.length);
// console.log(somma);
// console.log(media);
//massimo di un arraylet arr
// let arr2:number[]=[2,3,4,5,0];
// let max:number=0;
// for(let i=0; i<arr2.length; i++){
//     if(arr2[i]>max){
//         max=arr2[i];
//     }
// }
// console.log(max);
// let arr4:number[]=[2,3,4,5,-2];
// let min:number=0;
// for(let i=0; i<arr4.length; i++){
//     if(arr4[i]<min){
//         min=arr4[i];
//     }
// }
// console.log("il piu piccolo numero dell'array è "+min);
// conta il numero di elementi pari in un arry
// let arr3:number []=[1,2,3,4,5,6,7,8,9,10]
// let pari:number=0;
// for(let i=0; i<arr3.length; i++){
//     if(arr3[i] %2==0){
//         pari++;
//     }
// }
// console.log("ci sono: "+pari + " numeri pari");
//stampa gli elementi della arry invertitop
let arr6 = [1, 2, 3, 4, 5, 20, 11];
for (let i = arr6.length - 1; i >= 0; i--) {
    console.log(arr6[i]);
}
arr6.push(6, 7, 9, 10);
arr6.unshift(0); // add an element to first position
//ordina numeri mma prende 2 parametri 
arr6.sort((a, b) => a - b);
console.log(arr6);
// arr6.forEach((valore, index, array) => {
//   console.log(valore);
// });
let color = ["rosso", "verde", "giallo", "blue"];
//ordina l'array in modo crescente
color.sort();
console.log(color);
//ordina l'array in modo decrescente
color.reverse();
console.log(color);
//array.splice(indice_partenza, quanti_elementi_eliminare, elemento1, elemento2, ...);
// aggiunge o toglie un  da indice preciso
// color.splice(2, 0, "A") //	Vai all'indice 2, non cancellare nulla e inserisci "A".
// color.splice(2, 1)	//Vai all'indice 2, cancella 1 elemento e non aggiungere nulla.
// color.splice(2, 1, "A")	//Vai all'indice 2, sostituisci l'elemento cancellandolo e mettendo "A".
// color.splice(2,0,"zero","uno");
// console.log(color);
// color.splice(3,0,"zero","uno");
// console.log(color);
console.log("======================");
let arr7 = ["primo", "secondo", "terzo", "quarto", "quinto"];
arr7.splice(3, 0, "iphone", "google");
console.log(arr7);
console.log("===========2===========");
arr7.splice(4, 2, "iphone", "google");
console.log(arr7);
