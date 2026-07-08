class Dipendenti {
  public matricola: string;
  public stipendio: number;
  public straordinario: number;

  constructor(matricola: string, stipendio: number, straordinario: number) {
    this.matricola = matricola;
    this.stipendio = stipendio;
    this.straordinario = straordinario;
  }

  getStipendio(): number {
    return this.stipendio;
  }

  // CORRETTO: Adesso calcola senza modificare permanentemente 'this.stipendio'
  paga(oredipendente: number): number {
    return this.stipendio + (this.straordinario * oredipendente);
  }
      
  stampa(): void {
    console.log(` 
                ******* Carta Dipendente *********
                Matricola : ${this.matricola}
                Extra     : ${this.straordinario}.00 € 
                Stipendio : ${this.stipendio}.00 € `);
  }
}

class DipendentiA extends Dipendenti {
  malattia: number = 0;

  constructor(matricola: string, stipendio: number, straordinario: number) {
    super(matricola, stipendio, straordinario);
  }

  // CORRETTO: Adesso AGGIUNGE i giorni (+=) senza fare il return
  prendiMalattia(giorniPresi: number): void {
    this.malattia += giorniPresi;
  }

  // Override del metodo paga
  paga(oreStraordinario: number): number {
    let p = super.paga(oreStraordinario);

    if (this.malattia > 0) {
       // Riduzione dello stipendio solo nel calcolo del totale
       return p - (this.malattia * 15.0);
    } else {
        return p;
    }
  }

  stampaMalattia(): void {
    console.log(` Giorni Di Malattia Presi : ${this.malattia}`);
   // super.stampa(); 
  }
  setStampaMalattia (): void{
    console.log(this.malattia)
  }
}

// --- TEST REALE ---
let dip2 = new DipendentiA("AB254", 5000, 20);
dip2.prendiMalattia(2);

// Calcoliamo la paga: 5000 + (20 * 2 ore) - (2 giorni * 15) = 5040 - 30 = 5010
let pagaFinale = dip2.paga(2); 
console.log(`Paga Calcolata del Mese: ${pagaFinale} €`); // Stampa 5010

dip2.stampaMalattia();
let mm = new DipendentiA ("matricola",1500.0,8.50)
mm.prendiMalattia(5)
console.log(mm.paga(10))
mm.setStampaMalattia()
