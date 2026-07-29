package it.controlflow;

public class Switch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int mese = 7;

		switch (mese) {

		case 12:
		case 1:
		case 2:

			System.out.println("STAGIONE : INVERNO");

			break;

		case 3:
		case 4:
		case 5:

			System.out.println("STAGIONE : PRIMAVERA");
			break;

		case 6:
		case 7:
		case 8:

			System.out.println("STAGIONE : ESTATE");
			break;

		case 9:
		case 10:
		case 11:

			System.out.println("STAGIONE : AUTUNNO");
			break;

		default:
			System.out.println("Mese non trovato");

		}

	}

}
