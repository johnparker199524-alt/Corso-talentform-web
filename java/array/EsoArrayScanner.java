package it.array;

import java.util.Scanner;

public class EsoArrayScanner {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] arr = new int[5];

		Scanner input = new Scanner(System.in);

		for (int i = 0; i < arr.length; i++) {

			System.out.println("Inserisci un numero ");
			arr[i] = input.nextInt();
		}
		input.close();
		// Stampiamo i valori

		System.out.println("Valori inseriti");

		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}

}
