package it.oop;

public class MainDipendente {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Dipendente dipendente = new Dipendente("Fabio",1800.00);
		
		dipendente.aumento(15);
		
		System.out.println(dipendente.getNome());
		System.out.println(dipendente.getStipendio());
	}

}
