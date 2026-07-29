package it.classe.absttact;

public class ContoRisparmio extends ContoBancario {

	public ContoRisparmio(int numeroConto, String intestatario, double saldo) {
		super(numeroConto, intestatario, saldo);
	}

	@Override
	public double calcolaInteressi() {

		 
		return super.saldo * 3 / 100;
	}

}
