package it.interfacce;


public class OrdineExpress implements IOrdine {

	public int numeroOrdine;
	public double importo;

	public OrdineExpress(int numeroOrdine, double importo) {

		this.numeroOrdine = numeroOrdine;
		this.importo = importo;
	}

	@Override
	public double calcolaSpedizione() {

		return importo;
	}

}