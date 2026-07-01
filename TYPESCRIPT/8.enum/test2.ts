//stampa tutti i nomi e posizione di un enum
// enum Taglia{
//     alto ,
//     basso,
//     medio,
//     grande,
//     moltoGrande
// }

// for (let i = 0; i <= Taglia.moltoGrande; i++) {
//     console.log(Taglia[i]+ " indice " + i);

// }
enum Taglia{
    alto ,
    basso,
    medio,
}
let liv1:Taglia =Taglia.alto;
let liv2:Taglia =Taglia.basso;
let liv3:Taglia =Taglia.medio;

if (liv1 > liv2 && liv1 > liv3) {
    console.log(" il piu alto è : " + liv1);
} else if(liv2 > liv1 && liv2 > liv3){
        console.log(" il piu alto è : " + liv2);

}else if(liv3 > liv1 && liv3 > liv2){
          console.log(" il piu alto è : " + liv3);

}else{
  console.log(" livelli uguali");

}       