package it.controlflow;

public class Banca {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// VERIFICA L'OPERAZIONE BANCARIA DA ESEGUIRE INSERENDO PRIMA IL PIN CORRETTO

		int pinInserito = 2312;
		int pinCorretto = 2312;

		int sceltaOperazione = 2;

		if (pinInserito == pinCorretto) {

			switch (sceltaOperazione) {

			case 1:

				System.out.println("Effettuo un versamento di : 200 €");

				break;

			case 2:

				System.out.println("Effettuo un prelievo di : 50 €");

				break;

			case 3:

				System.out.println("Verifico il saldo attuale");

				break;

			default:

				System.out.println("Operazione non è valida");
				break;
			}

		}

		else {

			System.out.println("Il pin digitato non è corretto");

		}

	}

}
