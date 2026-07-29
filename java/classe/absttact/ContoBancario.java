package it.classe.absttact;

/*Gestione dei conti bancari
Traccia
Una banca gestisce diverse tipologie di conti correnti.
Crea una classe astratta ContoBancario che contenga:
•	la proprietà numeroConto;
•	la proprietà intestatario;
•	la proprietà saldo;
•	un costruttore per inizializzare le proprietà;
•	un metodo astratto calcolaInteressi() che restituisce un numero.
Successivamente crea una classe ContoRisparmio 
che estende ContoBancario.
Il metodo calcolaInteressi() deve calcolare gli
 interessi applicando un tasso del 3% al saldo.
Infine:
•	crea un oggetto ContoRisparmio;
•	stampa il numero del conto;
•	stampa l'intestatario;
•	stampa il saldo;
•	stampa gli interessi maturati.*/

public abstract class ContoBancario {

	public int numeroConto;
	public String intestatario;
	public double saldo;

	// costruttore
	public ContoBancario(int numeroConto, String intestatario, double saldo) {

		this.numeroConto = numeroConto;
		this.intestatario = intestatario;
		this.saldo = saldo;
	}

	// metodo calcolaInteressi()
	public abstract double calcolaInteressi();

}
