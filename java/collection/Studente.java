package it.collection;

public class Studente {

	public String nome;
	public String cognome;
	public String citta;
	public int eta;
//costruttore
	public Studente(String nome, String cognome, String citta, int eta) {
		this.nome = nome;
		this.cognome = cognome;
		this.citta = citta;
		this.eta = eta;
	}
	

	@Override
	public String toString() {
		return "Studente [nome = " + nome + ", cognome = " + cognome + ", citta = " + citta + ", eta =" + eta + "]";
	}
	
	
	
	

}
