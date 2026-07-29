package it.classe.absttact;

public class CorsoJava extends Corso {

	public CorsoJava(String titolo, String docente) {
		super(titolo, docente);
	}

	@Override
	public void mostraDettagli() {

		System.out.println("Titolo : " + super.titolo);

		System.out.println("Docente : " + super.docente);

	}

}
