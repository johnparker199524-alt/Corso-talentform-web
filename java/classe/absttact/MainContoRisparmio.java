package it.classe.absttact;

public class MainContoRisparmio {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ContoRisparmio conto  = new ContoRisparmio(5,"IT12345",500.0);
	
		System.out.println("Numero Conto : "+ conto.numeroConto);
		System.out.println("Intestatario : "+ conto.intestatario);
		System.out.println("Saldo " + conto.saldo +" €");
		System.out.println("Interessi : "+conto.calcolaInteressi()+"€");
		
	}

}
