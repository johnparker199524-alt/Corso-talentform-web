package it.oop;

public class MainEserciziOOP {

	public static void main(String[] args) {

		EserciziOOP account = new EserciziOOP(0, 100, 30, 50, 10);

		System.out.println("SALDO ATTUALE :" + account.getTotalAccount() + "€");
	}

}
