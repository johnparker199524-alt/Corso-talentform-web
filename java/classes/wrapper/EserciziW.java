package it.classes.wrapper;

public class EserciziW {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/*
		 * Character.isDigit() Traccia: Verifica se il carattere '9' è una cifra
		 * numerica.
		 */

		Character c = '9';
		System.out.println(Character.isDigit(c));

		/*
		 * Float.parseFloat() Traccia: Converti la stringa "3.14" in un valore float.
		 */

		String pi = "3.14";
		Float f = Float.parseFloat(pi) ;
           System.out.println("conversione String -> Float : " + f);
		/*
		 * Boxing in array Traccia: Crea un array di oggetti Integer con i valori da 1 a
		 * 5.
		 */
		 Integer [] array =  {1,2,3,4,5};

		        for(Integer a : array) {
		        	
		        	System.out.print(a+ " ");
		        }
	}

}
