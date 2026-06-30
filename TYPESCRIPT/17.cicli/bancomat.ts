//ESERCIZIO 9 -  Crea una simulazione bancomat: con if verifica il PIN, con switch scegli l’operazione.

let pinInserito: number = 1234;
let pinCoretto: number = 1234;

if(pinInserito === pinCoretto){

    let operazione: number = 3;

    switch (operazione) {
        case 1: console.log("saldo: 1000€");
            
            break;
    
        case 2: console.log("versamento effetuato");
            
            break;
    
        case 3: console.log("prelievo svolto");
            
            break;
    
        default: console.log("operazione non valida");
            break;
    }
    

}else{
      console.log(" pin Sbagliato  riprova !!");
}



