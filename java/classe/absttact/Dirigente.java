package it.classe.absttact;

public class Dirigente extends Dipendente  {

	public Dirigente(String nome, double stipendioBase) {
		super(nome, stipendioBase);
	
	}

	@Override
	public void calcolaBonus() {
      
		double bonus = (super.stipendioBase *25) /100;
		System.out.println("Nome : "+super.nome);
		System.out.println("Stipendio : "+ super.stipendioBase+" €");
		System.out.println("Bonus : " +bonus+"€");
		
	}
	
	

}
