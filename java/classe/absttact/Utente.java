package it.classe.absttact;
/*
 * Gestione degli utenti di un sito web
Traccia
Un sito web gestisce diversi tipi di utenti.
Crea una classe astratta Utente contenente:
•	nome;
•	email;
•	metodo astratto mostraRuolo().
Successivamente crea una classe Amministratore.
Quando viene richiamato il metodo deve stampare:
Ruolo: Amministratore*/
public abstract class Utente {

	public String nome;
	public String email;
	
	
	public Utente(String nome, String email) {
		
		this.nome = nome;
		this.email = email;
	}


	public abstract void mostraRuolo();
}
