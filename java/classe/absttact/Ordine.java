package it.classe.absttact;

/*
 * Un e-commerce gestisce diverse tipologie di ordini.
Crea una classe astratta Ordine contenente:
•	numeroOrdine;
•	importo;
•	un costruttore;
•	il metodo astratto calcolaSpedizione().
Successivamente crea la classe OrdineExpress.
Il costo della spedizione è sempre di 12 €.
Infine:
•	crea un ordine;
•	stampa il numero dell'ordine;
•	stampa l'importo;
•	stampa il costo della spedizione.
*/
public abstract class Ordine {
	public int numeroOrdine;
	public double importo;

	public Ordine(int numeroOrdine, double importo) {

		this.numeroOrdine = numeroOrdine;
		this.importo = importo;
	}
	
	public abstract void calcolaSpedizione();

}
