package it.classe.absttact;

/*
 * Una piattaforma e-learning gestisce diversi corsi.
Crea una classe astratta Corso contenente:
•	titolo;
•	docente;
•	un costruttore;
•	il metodo astratto mostraDettagli().
Successivamente crea la classe CorsoJava.
Il metodo mostraDettagli() deve stampare tutte le informazioni del corso.
Infine crea un oggetto e richiama il metodo.*/
public abstract class Corso {

	public String titolo;
	public String docente;

	public Corso(String titolo, String docente) {

		this.titolo = titolo;
		this.docente = docente;
	}

	public abstract void mostraDettagli();

}
