package it.oop;

public class MainArtigiano {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
               
			StaticArtigiano artigiano = new StaticArtigiano(85000,67,15000,24,15,2500);
			
			System.out.println("REDDITO ANNUO NETTO ARTIGIANO :" + StaticArtigiano.getRedditoAnnuoNetto() + "€");

		
	}

}
