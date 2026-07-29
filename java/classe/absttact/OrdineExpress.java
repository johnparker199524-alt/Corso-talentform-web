package it.classe.absttact;

public class OrdineExpress extends Ordine {
	public final int spedizione = 12;

	public OrdineExpress(int numeroOrdine, double importo) {
		super(numeroOrdine, importo);
	}

	@Override
	public void calcolaSpedizione() {
		
      System.out.println("Ordine N° "+ super.numeroOrdine);
      System.out.println("importo : "+ super.importo+"€");
      System.out.println("Costo Spedizione : "+this.spedizione+".0€");
      System.out.println("Totale : "+ (super.importo+this.spedizione)+"€");
		
	}
	

}
