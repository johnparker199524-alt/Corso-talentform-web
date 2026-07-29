package it.classe.absttact;

//definisce solo i metodi 

public class BankAccount extends AbstractBankAccount {

	private int balance;
	private int primoVersamento;
	private int primoPrelievo;
	private int secondoVersamento;
	private int secondoPrelievo;
	private int terzoVersamento;
	private int terzoPrelievo;
	private int canoneAnnuo;

	public BankAccount(int balance, int primoVersamento, int primoPrelievo, int secondoVersamento, int secondoPrelievo,
			int terzoVersamento, int terzoPrelievo, int canoneAnnuo) {

		this.balance = balance;
		this.primoVersamento = primoVersamento;
		this.primoPrelievo = primoPrelievo;
		this.secondoVersamento = secondoVersamento;
		this.secondoPrelievo = secondoPrelievo;
		this.terzoVersamento = terzoVersamento;
		this.terzoPrelievo = terzoPrelievo;
		this.canoneAnnuo = canoneAnnuo;

	}

	@Override
	public int getPrimoVersamento() {

		return balance + primoVersamento;
	}

	@Override
	public int getPrimoPrelievo() {

		return getPrimoVersamento() - secondoPrelievo;
	}

	@Override
	public int getSecondoVersamento() {

		return getPrimoPrelievo() + secondoVersamento;
	}

	@Override
	public int getSecondoPrelievo() {

		return getSecondoVersamento() - secondoPrelievo;
	}

	@Override
	public int getTerzoVersamento() {

		return getSecondoPrelievo() + terzoVersamento;
	}

	@Override
	public int getTerzoPrelievo() {

		return getTerzoVersamento() - terzoPrelievo;
	}

	public int getCanoneAnnuo() {

		return (getTerzoPrelievo() * canoneAnnuo) / 100;
	}

	@Override
	public int getTotalAccount() {

		return getTerzoPrelievo() - getCanoneAnnuo();
	}

}
