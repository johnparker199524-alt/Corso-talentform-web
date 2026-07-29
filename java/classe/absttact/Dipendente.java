package it.classe.absttact;
/*
 * Crea una classe astratta Dipendente contenente:
•	nome;
•	stipendioBase;
•	un costruttore;
•	il metodo astratto calcolaBonus().
Successivamente crea la classe Dirigente.
Il bonus deve essere pari al 25% dello stipendio base.
Infine:
•	crea un dirigente;
•	stampa il nome;
•	stampa lo stipendio;
•	stampa il bonus.*/

public abstract class Dipendente {

	public String nome;
	public double stipendioBase;

	public Dipendente(String nome, double stipendioBase) {

		this.nome = nome;
		this.stipendioBase = stipendioBase;
	}
	
 public abstract void calcolaBonus();
	
	
	
	

}
