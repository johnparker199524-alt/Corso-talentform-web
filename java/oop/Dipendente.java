package it.oop;

/*
 * //Progettare una classe di nome Dipendente. Tale classe prevede due variabili di

//istanza una definita come nome, di tipo String e una definita come stipendio di
//tipo double. Scrivere un costruttore senza parametri, un costruttore con due
//parametri (nome e stipendio).La classe deve inoltre implementare i seguenti
//metodi. Un metodo definito come public String getNome() che restituisce il nome
//del dipendente. Un metodo definito come public double getStipendio() che
//restituisce lo stipendio del dipendente. Un metodo public void
//setStipendio(double nuovoStipendio) che modifica il valore dello stipendio. Un
//metodo public void setNome(String nuovoNome) che cambia il nome al dipendente.
//Aggiungere poi un metodo aumento(double percentuale), che incrementi lo
//stipendio del dipendente secondo una certa percentuale.
*/

public class Dipendente {

	public String nome;
	public double stipendio;

	public Dipendente() {
		this.nome = "";
		this.stipendio = 0;
	}

	public Dipendente(String nuovoNome, double nuovoStipendio) {
		this.nome = nuovoNome;
		this.stipendio = nuovoStipendio;
	}

	public String getNome() {
		return nome;
	}

	public double getStipendio() {
		return stipendio;
	}

	public void setStipendio(double nuovoStipendio) {
		this.stipendio = nuovoStipendio;
	}

	public void setNome(String nuovoNome) {
		this.nome = nuovoNome;
	}

	public void aumento(double percentuale) {

		this.stipendio = stipendio + ((stipendio * percentuale / 100));

	}

}
