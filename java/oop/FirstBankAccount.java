package it.oop;

public class FirstBankAccount {

	// MODEL
	
	// ATTRIBUTI DELLA CLASSE
	
	
	// INCAPSULAMENTO
	
	
	private int balance;
	private int primoVersamento;
	private int primoPrelievo;
	private int secondoVersamento;
	private int secondoPrelievo;
	private int terzoVersamento;
	private int terzoPrelievo;
	public FirstBankAccount() {}
	
	// DICHIARAZIONE DEL COSTRUTTORE DELLA CLASSE E INIZIALIZZAZIONE DEGLI ATTRIBUTI
	
	public FirstBankAccount(int balance, int primoVersamento, int primoPrelievo, int secondoVersamento, int secondoPrelievo,
			int terzoVersamento, int terzoPrelievo) {
		
		this.balance = balance;
		this.primoVersamento = primoVersamento;
		this.primoPrelievo = primoPrelievo;
		this.secondoVersamento = secondoVersamento;
		this.secondoPrelievo = secondoPrelievo;
		this.terzoVersamento = terzoVersamento;
		this.terzoPrelievo = terzoPrelievo;
	}


	
	    // METODI DELLA CLASSE 
	
	    
	    

	public int getPrimoVersamento() {
		return balance + primoVersamento;
	}


	public int getPrimoPrelievo() {
		return getPrimoVersamento() - primoPrelievo;
	}


	public int getSecondoVersamento() {
		return getPrimoPrelievo() + secondoVersamento;
	}


	public int getSecondoPrelievo() {
		return getSecondoVersamento() - secondoPrelievo;
	}


	public int getTerzoVersamento() {
		return getSecondoPrelievo() + terzoVersamento;
	}


	public int getSaldoDefinitivo() {
		return getTerzoVersamento()- terzoPrelievo;
	}
	
	
	
	
	
	
	
	
	
	
}
