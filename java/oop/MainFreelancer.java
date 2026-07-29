package it.oop;

public class MainFreelancer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

			Freelancer freelancer = new Freelancer();
			
			freelancer.setRedditoAnnuoLordo(65000);
			freelancer.setCoeffRedd(78);
			freelancer.setAliquotaInps(26);
			freelancer.setAliquotaIrpef(15);
		
			
			System.out.println("REDDITO ANNUO NETTO :" + freelancer.getStipendioMensileNetto()+ "€");

	}

}
