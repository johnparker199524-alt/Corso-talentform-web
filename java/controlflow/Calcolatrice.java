package it.controlflow;

public class Calcolatrice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/* Simula una calcolatrice base con switch (+, -, *, /). */

		char operazione = '/';
		int a = 5;
		int b = 3;
		System.out.println(" ************ Calcolatrice 2.0 *************************** ");
		switch (operazione) {

		case '+':
			System.out.println("Addizione : " + a + " + " + b + " = " + (a + b));
			break;
		case '-':
			System.out.println("Sottrazione : " + a + " - " + b + " = " + (a - b));
			break;
		case '*':
			System.out.println("Moltiplicazione : " + a + " X " + b + " = " + (a * b));
			break;
		case '/':
			if (b != 0) {
				double div;
				double aa = a;
				double bb = b;
				div =(aa / bb);
				System.out.println("Divizione : " + a + " / " + b + " = " + div);
			} else {
				System.out.println(" Impossibile : Syntax Error !!");
			}
			break;
		default:
			System.out.println(" scegli tra * , + , / , -");
			break;

		}

	}

}
