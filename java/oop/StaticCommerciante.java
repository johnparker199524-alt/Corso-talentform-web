package it.oop;

public class StaticCommerciante extends StaticArtigiano {

	public StaticCommerciante(int redditoAnnuoLordo, int coeffRedd, int importoEccedente, int aliquotaInps,
			int aliquotaIrpef, int inpsFissa) {
		super(redditoAnnuoLordo, coeffRedd, importoEccedente, aliquotaInps, aliquotaIrpef, inpsFissa);

	}

	public static int getImponibileInpsFissa() {
		return (redditoAnnuoLordo - importoEccedente) * coeffRedd / 100;
	}

	public static int getTassaInps() {
		return getImponibileInpsFissa() * aliquotaInps / 100;
	}

	public static int getImponibileIrpef() {
		return (redditoAnnuoLordo * coeffRedd) / 100;
	}

	public static int getTassaIrpef() {
		return (getImponibileIrpef() * aliquotaIrpef) / 100;
	}

	public static int getRedditoAnnuoNetto() {
		return redditoAnnuoLordo - (inpsFissa + getTassaIrpef() + getTassaInps());
	}

}
