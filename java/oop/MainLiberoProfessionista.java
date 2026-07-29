package it.oop;

public class MainLiberoProfessionista extends LiberoProfessionista{
	@Override
	public int getImponibile() {
		return super.getImponibile();
		
		
	}
	
	@Override
	public int getTassaInps() {
		return super.getTassaInps();
		
		
	}
	
	@Override
	public int getTassaIrpef() {
		return super.getTassaIrpef();
		
		
	}
	
	
	@Override
	public int getRedditoAnnuoNetto() {
		return super.getRedditoAnnuoNetto();
		
		
	}
	
	
	
	public static void main(String[] args) {
		
		LiberoProfessionista professionista = new LiberoProfessionista();
		MainLiberoProfessionista main = new MainLiberoProfessionista();
		
		professionista.setRedditoAnnuoLordo(50000);
		professionista.setCoeffRedd(78);
		professionista.setAliquotaInps(26);
		professionista.setAliquotaIrpef(15);
		
		main.setRedditoAnnuoLordo(60000);
		main.setCoeffRedd(78);
		main.setAliquotaInps(26);
		main.setAliquotaIrpef(15);
		
		System.out.println("REDDITO ANNUO NETTO LIBERO PROFESSIONISTA :" + professionista.getRedditoAnnuoNetto() + "€");
		System.out.println("REDDITO ANNUO NETTO MAIN LIBERO PROFESSIONISTA :" + main.getRedditoAnnuoNetto()+ "€");
	}

}
