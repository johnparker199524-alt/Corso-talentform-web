/*
ESERCIZIO 3 - Gestione dei prodotti
Traccia
Un negozio vende diversi prodotti.
Crea un'interfaccia IProdotto contenente:
•	nome; 
•	prezzo; 
•	metodo mostraInformazioni(). 
Successivamente crea una classe Smartphone che implementa l'interfaccia.
Il metodo deve stampare il nome e il prezzo del prodotto.
*/
interface IProdotto{
    nome: string; 
  prezzo: number;
  mostraInformazioni():void;
}

class Smartphone implements IProdotto{

    constructor(public nome:string, public prezzo: number){

    }

    mostraInformazioni():void{

        console.log("Prodotto:", this.nome);
     console.log("Prezzo:", this.prezzo + " €");

    }
    
}

let prod = new Smartphone("Iphone 19" , 2000);
  prod.mostraInformazioni();






// interface IProdotto {
//   nome: string;
//   prezzo: number;

//   mostraInformazioni(): void;
// }

// class Smartphone implements IProdotto {
//   constructor(
//     public nome: string,
//     public prezzo: number,
//   ) {}

//   mostraInformazioni(): void {
//     console.log("Prodotto:", this.nome);
//     console.log("Prezzo:", this.prezzo + " €");
//   }
// }

// let telefono = new Smartphone("iPhone 16", 1199);

// telefono.mostraInformazioni();
