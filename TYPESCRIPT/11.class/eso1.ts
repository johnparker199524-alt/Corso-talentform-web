class Dipendente {
  // CARATTERISTICHE DI UNA CLASSE

  // PROPRIETA'

  nome: string;
  cognome: string;
  ruolo: string;

  // OGNI CLASSE HA UN COSTRUTTORE DI DEFAULT IL QUALE REFERENZIA ED INIZIALIZZA LE PROPRIETA' DELLA CLASSE
  constructor(nome: string, cognome: string, ruolo: string) {
    // DICHIARAZIONE DEL COSTRUTTORE

    this.nome = nome; // REFERENZIO ED INIZIALIZZO LE PROPRIETA'
    this.cognome = cognome;
    this.ruolo = ruolo;
  }

  // METODO DELLA CLASSE
  getDipendente(): string {
    return this.nome + " " + this.cognome + " " + this.ruolo;
  }
  getNome(): string {
    return this.nome;
  }
}

let dipendent = new Dipendente("Fabio", "Di Gloria", "Docente");
let e= dipendent.getDipendente();
let nom = dipendent.getNome();

console.log(e);
console.log(nom);
