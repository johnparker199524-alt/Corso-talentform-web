package it.classe.absttact;

public abstract class Dipendenti {
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
	public String nome;
	public String cognome;

	public Dipendenti(String nome, String cognome) {
	
		this.nome = nome;
		this.cognome = cognome;
	}
	
	
	public abstract  int calcolaStipendio();
	

}
