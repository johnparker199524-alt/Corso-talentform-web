class Car {
  // Avendo messo "public" nei parametri, le proprietà 'brand' e 'year' 
  // vengono create e assegnate automaticamente! Il corpo del costruttore è vuoto.
  constructor(public brand: string, public year: number) {}

  public colorCar(): void {
    console.log("Colore non specificato");
  }

  public fuel(): string {
    return "Diesel";
  }
}

// L'EREDITARIETÀ: DealerShip eredita tutto ciò che è public (o protected) da Car
class DealerShip extends Car {
  // Proprietà specifiche di DealerShip
  public garage: string;
  public salesOperator: string;
  public testDrive: string;

  constructor(
    brand: string, // Passati a super()
    year: number,  // Passati a super()
    garage: string,
    salesOperator: string,
    testDrive: string,
    readonly id: number // Proprietà creata al volo (readonly)
  ) {
    super(brand, year); // Chiama il costruttore di Car (DEVE essere la prima riga)
    this.garage = garage;
    this.salesOperator = salesOperator;
    this.testDrive = testDrive;
  }

  // Un normale metodo getter
  public getCarsSold(): number {
    return 25;
  }

  // Il metodo Setter corretto
  public setTestDriveOperator(newOperator: string): void {
    if (this.salesOperator === newOperator) {
      throw new Error("L'operatore del test drive non può essere lo stesso delle vendite!");
    }
    this.testDrive = newOperator; // Assegnazione corretta
  }

  // POLIMORFISMO: Sovrascriviamo il metodo della classe madre Car!
  public fuel(): string {
    return "Elettrica (In concessionaria vendiamo solo queste!)";
  }
}

// --- TEST DEL CODICE ---
let dealer = new DealerShip("Audi", 2026, "Centrale", "Marco Vendite", "Luca Test", 1);

console.log(dealer.brand); // Stampa: Audi (ereditato da Car)
console.log(dealer.fuel());  // Stampa: Elettrica... (Polimorfismo in azione!)