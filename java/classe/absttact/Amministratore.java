package it.classe.absttact;

public class Amministratore extends Utente{

	

	public Amministratore(String nome, String email) {
		super(nome, email);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void mostraRuolo() {

		System.out.println("Ruolo : Amministratore");
	}

}
