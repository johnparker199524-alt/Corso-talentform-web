package it.controlflow;

public class EserciziIfElse {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int numero = 3;
		String r = numero % 5 == 0 ? "numero divisibile per 5 " : "numero non divisibile per  5";


		System.out.println(r);
		System.out.println("======================================");

		if (numero % 2 == 0 && numero % 3 == 0) {
			System.out.println("il numero " + numero + " è divisibile per e 3 ");
		} else if (numero % 2 == 0) {
			System.out.println(" il numero " + numero + " è solo divisibile per 2");
		} else if (numero % 3 == 0) {
			System.out.println(" il numero " + numero + " è solo divisibile per 3");

		} else {
			System.out.println(" il numero " + numero + " non  è ne divisibile per 2 che per 3");

		}

		System.out.println("=========================================");
		switch (numero) {
		case 1:
			System.out.println("Lancio del Daddo");
			break;
		case 2:
			System.out.println("Lancio del Martelo");
			break;
		case 3:
			System.out.println("Lancio del Dischio");
			break;
		default:
			System.out.println("scegli tra 1 e 3");
			break;

		}

	}

}
