package it.oop;

public class MainBankAccount  {


	public static void main(String[] args) {

		// VISUALIZZAZIONE DEI RISULTATI = VIEW

    	FirstBankAccount bank = new FirstBankAccount(0, 100, 50, 20, 10, 40, 20); // CREO L'OGGETTO DI TIPO BANKACCOUNT
	//	BankAccount bank = new BankAccount(); // CREO L'OGGETTO DI TIPO BANKACCOUNT

    	SecondBankAccount main = new SecondBankAccount(0, 150, 50, 60, 30, 20, 10); // CREO L'OGGETTO DI TIPO
																				// MAINBANKACCOUNT

		System.out.println("SALDO DEFINITIVO BANK ACCOUNT :" + bank.getSaldoDefinitivo() + "€");
		System.out.println("SALDO DEFINITIVO MAIN BANK ACCOUNT :" + main.getSaldoDefinitivo() + "€");

	}
}
