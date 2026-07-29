package it.oop;

public class LiberoProfessionista {
	
	// MODEL

		// ATTRIBUTI DELLA CLASSE

		private int redditoAnnuoLordo;
		private int coeffRedd;
		private int aliquotaInps;
		private int aliquotaIrpef;

		public int getImponibile() {
			return (redditoAnnuoLordo * coeffRedd) / 100;
		}

		public void setRedditoAnnuoLordo(int redditoAnnuoLordo) {
			this.redditoAnnuoLordo = redditoAnnuoLordo;
		}

		public int getTassaInps() {
			return (getImponibile() * aliquotaInps) / 100;
		}

		public void setCoeffRedd(int coeffRedd) {
			this.coeffRedd = coeffRedd;
		}

		public int getTassaIrpef() {
			return (getImponibile() * aliquotaIrpef) / 100;
		}

		public void setAliquotaInps(int aliquotaInps) {
			this.aliquotaInps = aliquotaInps;
		}

		public int getRedditoAnnuoNetto() {
			return redditoAnnuoLordo - (getTassaInps() + getTassaIrpef());
		}

		public void setAliquotaIrpef(int aliquotaIrpef) {
			this.aliquotaIrpef = aliquotaIrpef;
		}

}
