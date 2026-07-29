package it.math1;

public class Pitagora {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/*
		 * Dati i cateti a = 3 e b = 4, calcola l’ipotenusa usando il teorema di
		 * Pitagora.
		 */
		int a = 3;
		int b = 4;
		double ipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

		System.out.println("l’ipotenusa del triangolo è : " + ipotenusa);
		System.out.println("==========================Casuale tra 1 a 10 ================");
		/* Stampa un numero intero random compreso tra 1 e 10. */

		int casuale = (int) (Math.random() * 10) + 1;
		System.out.println(casuale);
		int daddo = (int) (Math.random() * 12) + 1;
		System.out.println(daddo);

		// stampa il maggiore tra 17 e 27

		int n1 = 17;
		int n2 = 25;
		int max = (int) Math.max(n1, n2);
		int min = Math.min(n1, n2);
		System.out.println("Il max tra " + n1 + " e " + n2 + " è : " + max);
		// stampa il minore
		

		System.out.println("Il minore tra " + n1 + " e " + n2 + " è : " + min);

	}

}
