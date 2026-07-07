//    nome class
class Dipendenti {
  // CARATTERISTICHE DI UNA CLASSE

  // PROPRIETA'

  nome: string;
  cognome: string;
  ruolo: string;

  // OGNI CLASSE HA UN COSTRUTTORE DI DEFAULT IL QUALE
  //  REFERENZIA ED INIZIALIZZA LE PROPRIETA' DELLA CLASSE
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

// main
let dipendente = new Dipendenti("Fabio", "Di Gloria", "Docente"); //invocazione
let d = dipendente.getDipendente();
let nome = dipendente.getNome();

console.log(d);
console.log(nome);
