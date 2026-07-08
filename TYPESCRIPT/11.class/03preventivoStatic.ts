

// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO DI UN SITO

class PreventivoWeb {
  static giornateMockup: number;
  static giornateDatabase: number;
  static giornateIntegrazioneServiziWeb: number;
  static giornateTest: number;
  static tariffaGiornaliera: number;

  constructor(
    giornateMockup: number,
    giornateDatabase: number,
    giornateIntegrazioneServiziWeb: number,
    giornateTest: number,
    tariffaGiornaliera: number,
  ) {
    PreventivoWeb.giornateMockup = giornateMockup;
    PreventivoWeb.giornateDatabase = giornateDatabase;
    PreventivoWeb.giornateIntegrazioneServiziWeb =
      giornateIntegrazioneServiziWeb;
    PreventivoWeb.giornateTest = giornateTest;
    PreventivoWeb.tariffaGiornaliera = tariffaGiornaliera;
  }

  static getGiornateMockup(): number {
    return PreventivoWeb.tariffaGiornaliera * PreventivoWeb.giornateMockup;
  }

  static getGiornateDatabase() {
    return PreventivoWeb.tariffaGiornaliera * PreventivoWeb.giornateDatabase;
  }

  static getIntegrazioneServiziWeb() {
    return (
      PreventivoWeb.tariffaGiornaliera *
      PreventivoWeb.giornateIntegrazioneServiziWeb
    );
  }

  static getGiornateTest() {
    return PreventivoWeb.tariffaGiornaliera * PreventivoWeb.giornateTest;
  }

  static getPreventivo() {
    return (
      PreventivoWeb.getGiornateMockup() +
      PreventivoWeb.getGiornateDatabase() +
      PreventivoWeb.getIntegrazioneServiziWeb() +
      PreventivoWeb.getGiornateTest()
    );
  }
}

let st = new PreventivoWeb(5, 3, 2, 1, 250);
let pv = PreventivoWeb.getPreventivo();
console.log("TOTALE PREVENTIVO :" + pv + " €");
