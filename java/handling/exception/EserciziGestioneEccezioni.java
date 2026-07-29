package it.handling.exception;

public class EserciziGestioneEccezioni {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// GESTIONE ANOMALIA DI UN OPERAZIONE ARITMETICA

		int a = 6;
		int b = 0;

		try { // codice imprevisibile successibile di generare un eccesione
			int c = a / b;
			System.out.println(c);
			// ESEGUO LE ISTRUZIONE
		} catch (ArithmeticException e) { // SE E' PRESENTE UN ANOMALIA MI IMPEDISCE DI FAR ESEGUIRE LE ISTRUZIONI
			System.out.println(e);
		}

		finally {

			System.out.println("ECCEZIONE GESTITA");
		} 
		
		int [] array = {5,2,3};
		
		try {
			System.out.println(array[3]);
		} catch (Exception e) {
			
			// TODO: handle exception
			System.out.println(e);
		}
		
		
		

	}

}
