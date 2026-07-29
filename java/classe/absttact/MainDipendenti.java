package it.classe.absttact;

public class MainDipendenti {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Programmatore p = new Programmatore("john","Moise",70000);
		
		       System.out.println(p.cognome +" Guadagna AL mese :  " + p.calcolaStipendio() + " €");
	}

}
