package it.oop;

public class MainAutonomiComerciante {
	public static void main(String[] args) {

		StaticArtigiano artigiano = new StaticArtigiano(85000, 67, 15000, 24, 15, 2500);

		System.out.println("REDDITO ANNUO NETTO ARTIGIANO :" + StaticArtigiano.getRedditoAnnuoNetto() + "€");

		StaticCommerciante commerciante = new StaticCommerciante(95000, 40, 15000, 24, 15, 2500);

		System.out.println("REDDITO ANNUO NETTO COMMERCIANTE :" + StaticCommerciante.getRedditoAnnuoNetto() + "€");

	}
}
