package it.controlflow;

public class For {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// somma dei 100 primi numeri
//	
		/*
		 * Scrivi un programma che calcola il fattoriale del numero 5 (cioè 5 × 4 × 3 ×
		 * 2 × 1).
		 */
		System.out.println("Fattoriale 5");
		int fattoriale = 1;
		// 5*4*3*2*1
		for (int i = 1; i <= 5; i++) {

			fattoriale *= i;
			System.out.println(fattoriale);
		}

		System.out.println("=============================================");
		/* Scrivi un programma che stampa tutti i numeri da 1 a 50 divisibili per 3. */
		System.out.println("Divisibile per 3");

		for (int j = 1; j < 50; j++) {

			if (j % 3 == 0) {
				System.out.println(j);
			}
		}

//		for(int i = 0; i<5; i++) {
//			System.out.println(i);
//		}

		// Fibonarchie
//		int a = 0;
//		int b = 1;
//		int prossimo;
//		
//		for(int i =0; i<21 ;i++) {
//			
//			System.out.println(a);
//			
//			prossimo = a+b;
//			a=b;
//			b= prossimo;
//			
//			
//		}

	}

}
