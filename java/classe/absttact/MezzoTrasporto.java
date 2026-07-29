package it.classe.absttact;
/*Gestione dei mezzi di trasporto
Traccia
Un'azienda possiede diversi mezzi.
Crea una classe astratta MezzoTrasporto.
Essa deve contenere:
•	proprietà marca;
•	proprietà modello;
•	metodo astratto avvia().
Successivamente crea la classe Automobile.
Quando viene richiamato il metodo avvia() deve stampare:
L'automobile è stata avviata.*/

public abstract class MezzoTrasporto {

	public String marca;
	public String modello;
	
	
	
	public MezzoTrasporto(String marca, String modello) {
		
		this.marca = marca;
		this.modello = modello;
	}



	public abstract void  avvia();
}
