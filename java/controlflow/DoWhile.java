package it.controlflow;

public class DoWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// incremento
		int i = 1;
		int tabella = 4;
		System.out.println("==================Tabella di 4 ===================");

		do {
			System.out.println(tabella + " x " + i + " = " + (i * tabella));
			i++;
		} while (i <= 10);

		// tabbelina di 4
//
//		do {
//
//			System.out.println(i);
//			i++;
//		} while (i <= 20);
//
//		// in questA riga il valore di i è 21
//		System.out.println(i);
//		System.out.println("==============Decremento DoWhile==========");
//		// decremento
//		do {
//
//			System.out.println(i);
//			i--;
//		} while (i >= 10);

	}

}
