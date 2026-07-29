package it.array;

import java.util.Scanner;

public class FabioArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
// CALCOLA LA SOMMA DEGLI ELEMENTI
        
//        Scanner scanne = new Scanner(System.in);
//        int[] numeri = new int[3];
//        int somma = 0;
//
//        for (int i = 0; i < numeri.length; i++) {
//            System.out.print("Inserisci un numero: ");
//            numeri[i] = scanne.nextInt();
//            somma += numeri[i];
//        }
//
//        System.out.println("Somma: " + somma);

// CALCOLA LA MEDIA DEI VALORI INSERITI
		
        Scanner scanner = new Scanner(System.in);
        int[] numeri = new int[7];
        int somma = 0;

        for (int i = 0; i < numeri.length; i++) {
            System.out.print("Inserisci un numero: ");
            numeri[i] = scanner.nextInt();
            somma += numeri[i];
        }

        double media = (double) somma / numeri.length;
        System.out.println("Media: " + media);  



	}

}
