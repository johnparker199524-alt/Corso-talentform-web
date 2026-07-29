package it.oop;

public class SecondBankAccount extends FirstBankAccount {

	public SecondBankAccount(int balance, int primoVersamento, int primoPrelievo, int secondoVersamento,
			int secondoPrelievo, int terzoVersamento, int terzoPrelievo) {
		super(balance, primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo, terzoVersamento,
				terzoPrelievo);

	}

	// POLIMORFISMO

//	@Override
//	public int getPrimoVersamento() {
//		return super.getPrimoVersamento();
//
//	}
	// Scorciatoia da tastiera: Premi Alt + Shift + S e poi premi il tasto V.

	@Override
	public int getPrimoPrelievo() {
		return super.getPrimoPrelievo();
	}

	@Override
	public int getPrimoVersamento() {
		// TODO Auto-generated method stub
		return super.getPrimoVersamento();
	}

	@Override
	public int getSecondoVersamento() {
		return super.getSecondoVersamento();
	}

	@Override
	public int getSecondoPrelievo() {
		return super.getSecondoPrelievo();
	}

	@Override
	public int getTerzoVersamento() {
		return super.getTerzoVersamento();
	}

	@Override
	public int getSaldoDefinitivo() {
		return super.getSaldoDefinitivo();
	}

}
