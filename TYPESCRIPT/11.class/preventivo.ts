// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO 
// TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO
//  DI UN SITO

class Preventivo {
  giornateMockup: number;
  giornateDatabase: number;
  giornateIntegrazioneServiziWeb: number;
  giornateTestSito: number;
  tariffaGiornaliera: number;

  constructor(
    giornateMockup: number,
    giornateDatabase: number,
    giornateIntegrazioneServiziWeb: number,
    giornateTestSito: number,
    tariffaGiornaliera: number,
  ) {
    this.giornateMockup = giornateMockup;
    this.giornateDatabase = giornateDatabase;
    this.giornateIntegrazioneServiziWeb = giornateIntegrazioneServiziWeb;
    this.giornateTestSito = giornateTestSito;
    this.tariffaGiornaliera = tariffaGiornaliera;
  }

  getGiornateMockup() {
    return this.tariffaGiornaliera * this.giornateMockup;
  }

  getGiornateDatabase() {
    return this.tariffaGiornaliera * this.giornateDatabase;
  }

  getGiornateIntegrazioneServiziWeb() {
    return this.tariffaGiornaliera * this.giornateIntegrazioneServiziWeb;
  }

  getGiornateTestSito() {
    return this.tariffaGiornaliera * this.giornateTestSito;
  }

  getTotalePreventivo() {
    return (
      this.getGiornateMockup() +
      this.getGiornateDatabase() +
      this.getGiornateIntegrazioneServiziWeb() +
      this.getGiornateTestSito()
    );
  }
}

let preventivo = new Preventivo(5, 2, 1, 1, 250);
let p = preventivo.getTotalePreventivo();
console.log("TOTALE PREVENTIVO :" + p + " " + "€");
