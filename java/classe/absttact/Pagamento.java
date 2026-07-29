package it.classe.absttact;

/*
 * 	/*
	 * Gestione dei pagamenti
Traccia
Un e-commerce permette diversi metodi di pagamento.
Crea una classe astratta Pagamento contenente:
•	il metodo astratto effettuaPagamento(importo:number).
Successivamente crea una classe CartaDiCredito.
Quando viene effettuato il pagamento deve essere stampato:
Pagamento di 250€ effettuato con carta di credito.
Infine crea un oggetto e richiama il metodo.
	 * 
	 */
public abstract class Pagamento {

	public abstract void effettuaPagamento(int importo);

}
