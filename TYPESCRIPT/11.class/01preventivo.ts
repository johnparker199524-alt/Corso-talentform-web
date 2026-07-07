// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO
// TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO
//  DI UN SITO

class Fatturazione {
  // proprieta

  private frontEnd: number;
  private backEnd: number;
  private testApp: number;
  private configurazione: number;

  //costruttore
  constructor(
    front: number,
    back: number,
    testing: number,
    configurazione: number,
  ) {
    this.frontEnd = front;
    this.backEnd = back;
    this.testApp = testing;
    this.configurazione = configurazione;
  }

  //getter & setter

  getPrezzoFront(): number {
    return this.frontEnd * 5;
  }
  getPrezzoBackEnd(): number {
    return this.backEnd * 7;
  }
  getPrezzoTest(): number {
    return this.testApp * 3;
  }
  getPrezzoConfig(): number {
    return this.configurazione * 3;
  }

  //    getAll():[number,number,number,number]   {

  //     return [this.backEnd, this.frontEnd, this.testApp, this.configurazione];
  //    }

  //metodi

  programmaSvolgimneto(): string {
    return `
          **********Programma di svolgimento***************
          front-end --> 5 Giorni
           back-end --> 7 Giorni 
         pentesting --> 3 Giorni  (per picolli progetti)
 configurazione Pro --> 2 Giorni 
        `;
  }

  toString(): string {
    console.log("======= Preventivi per generaziona di un SASS Pro ========");
    return `
        ************ prezzi ********************            
                 Front-end : ${this.frontEnd} 
                 Back-end  : ${this.backEnd}.00 € 
                 Testing   : ${this.testApp} .00 €
                 Config    : ${this.configurazione}.00 €
           `;
  }
}

// main
// invocazione
let fattura = new Fatturazione(250, 700, 300, 500);
let fat = fattura.programmaSvolgimneto();
let prezzi = fattura.toString();
//let tupla : [x:number, y:number, z:number, n:number];

// tupla = fattura.getAll();
console.log(fat);
console.log(prezzi);
//console.log(fattura.frontEnd()); // ❌ ERRORE DI TYPESCRIPT!