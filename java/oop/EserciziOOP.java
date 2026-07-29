package it.oop;

public class EserciziOOP {

	// ESERCIZIO BANKACCOUNT

	// ATTRIBUTI DELLA CLASSE

	public int balance;
	public int primoVersamento;
	public int primoPrelievo;
	public int secondoVersamento;
	public int secondoPrelievo;

	// COSTRUTTORE DELLA CLASSE

	public EserciziOOP(int balance, int primoVersamento, int primoPrelievo, int secondoVersamento,
				int secondoPrelievo) {

			this.balance = balance;
			this.primoVersamento = primoVersamento;
			this.primoPrelievo = primoPrelievo;
			this.secondoVersamento = secondoVersamento;
			this.secondoPrelievo = secondoPrelievo;
		}

	public int getPrimoVersamento() {
		return balance + primoVersamento;
	}

	public int getPrimoPrelievo() {
		return getPrimoVersamento() - primoPrelievo;
	}

	public int getSecondoVersamento() {
		return getPrimoPrelievo() + secondoVersamento;
	}

	public int getTotalAccount() {
		return getSecondoVersamento() - secondoPrelievo;
	}

	
}
