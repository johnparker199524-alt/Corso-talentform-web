package it.enumeration;

public class Enum {

	enum Level {
		MEDIUM, HIGH, LOW

	}

	enum Giorno {
		LUNEDI, MARTEDI, MERCOLEDI, GIOVEDI, VENERDI, SABATO, DOMENICA
	}

	enum Stagione {
		PRIMAVERA, ESTATE, AUTUNNO, INVERNO
	}

	public static void main(String[] args) {

		//Giorno primo = Giorno.LUNEDI;

		Level myVar = Level.MEDIUM;

		Level myV = Level.HIGH;
		Level low = Level.LOW;
		System.out.println(myVar);
		System.out.println(myV);
		System.out.println(low);

		System.out.println("-------------");

		for (Giorno g : Giorno.values()) {
			System.out.println(g);
		}

		System.out.println("-------------");

		Stagione s = Stagione.ESTATE;

		switch (s) {
		case PRIMAVERA:
			System.out.println("Fioriscono i fiori!");
			break;
		case ESTATE:
			System.out.println("Si va al mare!");
			break;
		case AUTUNNO:
			System.out.println("Cadono le foglie!");
			break;
		case INVERNO:
			System.out.println("Fa freddo!");
			break;

		default:

			System.out.println("Stagione non trovata!");
		}

	}

}
