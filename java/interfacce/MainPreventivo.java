package it.interfacce;

public class MainPreventivo {

	public static void main(String[] args) {

		PreventivoApp preventivo = new PreventivoApp(5, 3, 3, 2, 4, 3, 1, 250.00);

		System.out.println("TOTALE PREVENTIVO APP WEB - MOBILE : " + preventivo.totalePreventivo() + " €");

	}
}