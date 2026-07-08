class Dipendente {
  matricola: string;
  stipendio: number;
  straordinario: number;

  constructor(matricola: string, stipendio: number, straordinario: number) {
    this.matricola = matricola;
    this.stipendio = stipendio;
    this.straordinario = straordinario;
  }

  getStipendio(): number {
    return this.stipendio;
  }

  // Corretto nome metodo da getPaga a paga
  paga(oreDipendente: number): number {
    return this.stipendio + oreDipendente * this.straordinario;
  }

  // Corretto nome metodo da setStampa a stampa
  stampa(): void {
    console.log(this.matricola + " " + this.stipendio + " " + this.straordinario);
  }
}

class DipendenteA extends Dipendente {
  malattia: number;

  constructor(matricola: string, stipendio: number, straordinario: number) {
    super(matricola, stipendio, straordinario);
    this.malattia = 0; // Corretto: inizializzato a 0 come da traccia
  }

  // Corretto nome metodo da setPrendiMalattia a prendiMalattia
  prendiMalattia(giorniMalattia: number): void {
    this.malattia = this.malattia + giorniMalattia;
  }

  // Override corretto del metodo paga
  paga(oreDipendente: number): number {
    let p: number = super.paga(oreDipendente);
    if (this.malattia === 0) {
      return p;
    } else {
      return p - (this.malattia * 15.0);
    }
  }

  // Corretto nome metodo da setStampaMalattia a stampaMalattia
  stampaMalattia(): void {
    console.log(this.malattia);
  }
}

// --- Test del codice ---
let m = new DipendenteA("A1234", 1500.0, 8.50);

// 1. Prende 5 giorni di malattia
m.prendiMalattia(5);

// 2. Calcolo paga: 1500 (base) + 85 (straordinari) - 75 (5 giorni * 15) = 1510
console.log("Paga totale: " + m.paga(10)); // Stampa 1510

// 3. Stampa i giorni di malattia
m.stampaMalattia(); // Stampa 5