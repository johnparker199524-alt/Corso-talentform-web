package it.enumeration;

public class EserciziEnumeration {

	// vanno sempre fuori il main
	enum Level {
		MEDIUM, HIGH, LOW, BIG

	};

	enum Giorni {

		LUNEDi, MARTEDI, VENERDI, GIOVEDI, SABATO, DOMANICA
	}

	enum Stagione {
		INVERNO, ESTATE, AUTONNO, PRIMAVERA
	}

	public static void main(String[] args) {

		// FOR EACH
		for (Giorni G : Giorni.values()) {

			System.out.println(G);
		}
		System.out.println("================================================");

		for (Stagione s : Stagione.values()) {
			System.out.println(s + " alla posizione "+ s.ordinal());
		}
		
		
		Stagione S = Stagione.AUTONNO;
		switch(S) {
		
		case PRIMAVERA :System.out.println("primavera");
		break;
		case AUTONNO :System.out.println("Troppo vento");
		break;
		case INVERNO :System.out.println("troppo freddo");
		break;
		case ESTATE :System.out.println("vai al mare");
		break;
		default: System.out.println("scopri il migliore consiglio per la stagionne ");
		break;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//		Level myVar = Level.MEDIUM;
//
//		Level myV = Level.HIGH;
//		Level low = Level.LOW;
//		Level big = Level.BIG;
//		System.out.println(myVar);
//		System.out.println(myV);
//		System.out.println(low);
//		System.out.println(big);

	}

}
