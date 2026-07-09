"use strict";
class Smartphone {
    nome;
    prezzo;
    constructor(nome, prezzo) {
        this.nome = nome;
        this.prezzo = prezzo;
    }
    mostraInformazioni() {
        console.log("Prodotto:", this.nome);
        console.log("Prezzo:", this.prezzo + " €");
    }
}
let prod = new Smartphone("Iphone 19", 2000);
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
