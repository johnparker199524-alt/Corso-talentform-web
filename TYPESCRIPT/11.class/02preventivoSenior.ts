/*class Fatturazione {
  // 1. SCORCIATOIA: Proprietà private create e assegnate direttamente qui!
  constructor(
    private frontEnd: number,
    private backEnd: number,
    private testApp: number,
    private configurazione: number
  ) {}

  // 2. VERI GETTER: Nota la parola chiave 'get' davanti.
  // Calcolano il prezzo in base ai giorni/tariffe (moltiplicatori)
  get prezzoFront(): number {
    return this.frontEnd * 5;
  }
  get prezzoBackEnd(): number {
    return this.backEnd * 7;
  }
  get prezzoTest(): number {
    return this.testApp * 3;
  }
  get prezzoConfig(): number {
    return this.configurazione * 3;
  }

  // 3. LA TUPLA SBLOCCATA: Restituisce un array fisso con 4 numeri ben precisi
  public getAllPrices(): [number, number, number, number] {
    return [this.prezzoFront, this.prezzoBackEnd, this.prezzoTest, this.prezzoConfig];
  }

  // metodi
  public programmaSvolgimento(): string {
    return `
    ********** Programma di svolgimento ***************
    Front-end --------> 5 Giorni
    Back-end ---------> 7 Giorni 
    Pentesting -------> 3 Giorni  (per piccoli progetti)
    Configurazione Pro -> 2 Giorni 
    `;
  }

  public toString(): string {
    return `
    ************ Preventivo SaaS Pro (Prezzi Totali) ******************** Prezzo Totale Front-end : € ${this.prezzoFront}.00
    Prezzo Totale Back-end  : € ${this.prezzoBackEnd}.00
    Prezzo Totale Testing   : € ${this.prezzoTest}.00
    Prezzo Totale Config    : € ${this.prezzoConfig}.00
    ---------------------------------------------------------------------
    TOTALE PREVENTIVO       : € ${this.prezzoFront + this.prezzoBackEnd + this.prezzoTest + this.prezzoConfig}.00
    `;
  }
}

// --- MAIN (Invocazione) ---
// Passiamo i prezzi base/orari per ogni servizio
let fattura = new Fatturazione(250, 700, 300, 500);

console.log(fattura.programmaSvolvimento());
console.log("======= Generazione Preventivo ========");
console.log(fattura.toString());

// Esempio d'uso della Tupla
const tutteLeVoci: [number, number, number, number] = fattura.getAllPrices();
console.log("Array dei prezzi calcolati:", tutteLeVoci);

// Nota come leggiamo il getter: SENZA PARENTESI TONDE!
console.log(`Singolo controllo prezzo Front-end: € ${fattura.prezzoFront}`); */