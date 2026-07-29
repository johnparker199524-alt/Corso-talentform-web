package it.classe.absttact;

public class MainBankAccount {

	public static void main(String[] args) {

		BankAccount account = new BankAccount(0, 100, 50, 20, 10, 80, 50, 10);

		System.out.println("TOTAL ACCOUNT :" + account.getTotalAccount() + "€");

	}
}
