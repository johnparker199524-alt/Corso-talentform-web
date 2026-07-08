// polymorfismo Eriditaritea


// EREDITARIETA' E POLIMORFISMO

class FatherAccount {
  saldoAttuale: number;
  primoVersamento: number;
  primoPrelievo: number;
  secondoVersamento: number;
  secondoPrelievo: number;

  constructor(
    saldoAttuale: number,
    primoVersamento: number,
    primoPrelievo: number,
    secomdoVersamento: number,
    secondoPrelievo: number,
  ) {
    this.saldoAttuale = saldoAttuale;
    this.primoVersamento = primoVersamento;
    this.primoPrelievo = primoPrelievo;
    this.secondoVersamento = secomdoVersamento;
    this.secondoPrelievo = secondoPrelievo;
  }

  getPrimoVersamento(): number {
    return this.saldoAttuale + this.primoVersamento;
  }

  getPrimoPrelievo(): number {
    return this.getPrimoVersamento() - this.primoPrelievo;
  }

  getSecondoVersamento(): number {
    return this.getPrimoPrelievo() + this.secondoVersamento;
  }

  getSaldoDefinitivo(): number {
    return this.getSecondoVersamento() - this.secondoPrelievo;
  }
}

let account = new FatherAccount(0, 100, 30, 50, 10);
let sd = account.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO FATHER ACCOUNT :" + sd + " €");

// EREDITARIETA' = FAR ACQUISIRE ALLA CLASSE SON 
// ACCOUNT ATTRIBUTI E METODI DELLA CLASSE 
// FATHER ACCOUNT
class SonAccount extends FatherAccount {
  canoneAnnuo: number;

  constructor(
    saldoAttuale: number,
    primoVersamento: number,
    primoPrelievo: number,
    secondoVersamento: number,
    secondoPrelievo: number,
    canoneAnnuo: number,
  ) {
    super(
      saldoAttuale,
      primoVersamento,
      primoPrelievo,
      secondoVersamento,
      secondoPrelievo,
    );

    this.canoneAnnuo = canoneAnnuo;
  }

  // POLIMOFISMO = RIDEFINIRE I METODI GIA' 
  // DEFINITI NELLA CLASSE FATHER ACCOUNT
  // override
  getPrimoVersamento(): number {
    return this.saldoAttuale + this.primoVersamento;
  }

  getPrimoPrelievo(): number {
    return this.getPrimoVersamento() - this.primoPrelievo;
  }

  getSecondoVersamento(): number {
    return this.getPrimoPrelievo() + this.secondoVersamento;
  }

  getSecondoPrelievo(): number {
    return this.getSecondoVersamento() - this.secondoPrelievo;
  }

  getCanoneAnnuo(): number {
    return (this.getSecondoVersamento() * this.canoneAnnuo) / 100;
  }

  getSaldoDefinitivo(): number {
    return this.getSecondoPrelievo() - this.getCanoneAnnuo();
  }
}

let son = new SonAccount(0, 150, 50, 20, 10, 15);

let sds = son.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO SON ACCOUNT :" + sds + " €");



