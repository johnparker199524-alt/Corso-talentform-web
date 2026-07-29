package it.interfacce;

//Un e-commerce gestisce gli ordini dei clienti.

//Crea un'interfaccia IOrdine contenente:
//•	numeroOrdine;
//•	importo;
//•	metodo calcolaSpedizione().
//Successivamente crea una classe OrdineExpress che implementa l'interfaccia.
//Il metodo deve restituire un costo di spedizione pari a 12 €.
//Infine stampa tutte le informazioni dell'ordine.

public interface IOrdine {

	public double calcolaSpedizione();

}