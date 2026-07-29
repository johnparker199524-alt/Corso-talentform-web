package it.classe.absttact;
/*
 * Gestione dei dipendenti di un'azienda Traccia Un'azienda gestisce diverse
 * tipologie di dipendenti. Crea una classe astratta Dipendente che contenga: •
 * la proprietà nome; • la proprietà cognome; • un costruttore per inizializzare
 * le proprietà; • un metodo astratto calcolaStipendio() che restituisce un
 * numero. Successivamente crea una classe Programmatore che estende Dipendente.
 * La classe Programmatore deve avere una proprietà aggiuntiva stipendioMensile.
 * Implementa il metodo calcolaStipendio() restituendo lo stipendio mensile.
 * Infine: • crea un oggetto Programmatore; • stampa nome e cognome; • stampa lo
 * stipendio calcolato.
 * 
 */
public class Programmatore  extends Dipendenti{
	protected int stipendioMensile;

	public Programmatore(String nome, String cognome, int stipendioMese ) {
		super(nome, cognome);
		this.stipendioMensile = stipendioMese;
	}

	@Override
	public int calcolaStipendio() {
		// TODO Auto-generated method stub
		return this.stipendioMensile;
	}
	
	

}
