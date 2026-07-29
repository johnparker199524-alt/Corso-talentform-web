package it.oop;

public class Freelancer {

	public int redditoAnnuoLordo; //stipendio annuale
	public int coeffRedd; //tassa generale
	public int aliquotaInps; // tassa inps
	public int aliquotaIrpef; // tassa Irpef
	
	
	
	public int getImponibile() {
		return (redditoAnnuoLordo * coeffRedd) /100;
		
	}
	
	public void setRedditoAnnuoLordo(int redditoAnnuoLordo) {
		this.redditoAnnuoLordo = redditoAnnuoLordo;
	}
	
	public int getTassaInps() {
		return (getImponibile()*aliquotaInps)/100;
	}
	public void setCoeffRedd(int coeffRedd) {
		this.coeffRedd = coeffRedd;
	}
	
	public int getTassaIrpef() {
		return (getImponibile()*aliquotaIrpef)/100;
	}
	public void setAliquotaInps(int aliquotaInps) {
		this.aliquotaInps = aliquotaInps;
	}
	public int getStipendioMensileNetto() {
		return (redditoAnnuoLordo - (getTassaInps() + getTassaIrpef()))/12;
	}
	public void setAliquotaIrpef(int aliquotaIrpef) {
		this.aliquotaIrpef = aliquotaIrpef;
	}

}
