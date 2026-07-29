package it.interfacce;

public class CorsoJava implements ICorso {
	
	public String titolo;
	public String docente;
	
	public CorsoJava(String titolo, String docente) {
	
		this.titolo = titolo;
		this.docente = docente;
	}

	@Override
	public void mostraCorso() {
		
		System.out.println("Titolo :" + titolo);
		System.out.println("Docente :" + docente);
		
		
	}
	
	
	

}
