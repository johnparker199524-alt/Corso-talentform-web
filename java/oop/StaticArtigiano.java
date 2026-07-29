package it.oop;

public class StaticArtigiano {


	// MODEL

	// ATTRIBUTI DELLA CLASSE

	protected static int redditoAnnuoLordo;
	protected static int coeffRedd;
	protected static int importoEccedente;
	protected static int aliquotaInps;
	protected static int aliquotaIrpef;
	protected static int inpsFissa;

	// COSTRUTTORE CHE INIZIALIZZA GLI ATTRIBUTI DELLA CLASSE

	public StaticArtigiano(int redditoAnnuoLordo, int coeffRedd, int importoEccedente, int aliquotaInps,
			int aliquotaIrpef, int inpsFissa

	) {

		StaticArtigiano.redditoAnnuoLordo = redditoAnnuoLordo;
		StaticArtigiano.coeffRedd = coeffRedd;
		StaticArtigiano.importoEccedente = importoEccedente;
		StaticArtigiano.aliquotaInps = aliquotaInps;
		StaticArtigiano.aliquotaIrpef = aliquotaIrpef;
		StaticArtigiano.inpsFissa = inpsFissa;

	}

	public static int getImponibileInpsFissa() {
		return (redditoAnnuoLordo - importoEccedente) * coeffRedd / 100;
	}

	public static int getTassaInps() {
		return getImponibileInpsFissa() * aliquotaInps / 100;
	}

	public static int getImponibileIrpef() {
		return (redditoAnnuoLordo * coeffRedd ) / 100;
	}
	
	public static int getTassaIrpef() {
		return (getImponibileIrpef() * aliquotaIrpef ) / 100;
	}

	public static int getRedditoAnnuoNetto() {
		return redditoAnnuoLordo - (inpsFissa + getTassaIrpef() + getTassaInps());
	}
}
