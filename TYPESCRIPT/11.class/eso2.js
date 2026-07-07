"use strict";
class Auto {
    nome;
    modello;
    cilindrata;
    constructor(nome, model, cilindri) {
        this.nome = nome;
        this.modello = model;
        this.cilindrata = cilindri;
    }
    //getter
    getNome() {
        return this.nome;
    }
    getModello() {
        return this.modello;
    }
    getCilindrata() {
        return this.cilindrata;
    }
    // to string
    toString() {
        return ` Categoria Automobile : -->  il ${this.nome} ${this.modello} ha ${this.cilindrata}  cilindrata`;
    }
}
// main
// invocazione dell'oggeto 
let auto = new Auto("Ford Mustang", "FM-4x4", 8);
let no = auto.getNome();
let pr = auto.toString();
console.log(auto);
