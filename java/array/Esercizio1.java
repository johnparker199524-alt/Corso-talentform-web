package it.array;

public class Esercizio1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/* Stampa gli elementi dell’array in ordine inverso. */

		int[] number = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

		for (int i = (number.length - 1); i >= 0; i--) {

			System.out.println(number[i]);

		}
		// System.out.println(number.length);

		/*
		 * 
		 * Calcola la media aritmetica degli elementi di un array.
		 */
		int somma = 0;

		double som = somma; //casting  per avere il valore con virgola
		for (int n : number) {
			som += n;

		}

		double media = som / number.length;
		System.out.println("La media è :" + media);

	}

}
