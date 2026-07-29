package it.handling.exception;
import java.util.Scanner;

public class EsercizioScannerEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
//		/*Traccia: Crea una variabile null e gestisci NullPointerException.*/
//		
//		String variabileNull = null ;
//		
//		try {
//			System.out.println(variabileNull.length());
//		} catch (NullPointerException  e) {
//			// TODO: handle exception
//			System.out.println("Errore");
//		}
//		
		
		//==================================================================================================================

		
		/*GESTISCI L'ECCEZIONE  DELLA POSIZIONE INESISTENTE DI UN ARRAY UTILIZZANDO LA CLASSE SCANNER*/
		Scanner input = new Scanner(System.in);
		
		int [] numeri = {1,2,5};
		
		System.out.println("scegli una posizione per un elemento che vuoi vedere");
		int i = input.nextInt();
		
		try {
			
			System.out.println(numeri[i]);
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("errore di tipo : "+ e);
		}
		
		
		
		
		
		
//=====================================================================================================================
		
		
//		/*GESTISCI L'ECCEZIONE DIVISIONE PER 0 UTILIZZANDO LA CLASSE SCANNER*/
//		System.out.println("GESTISCI L'ECCEZIONE DIVISIONE PER 0 UTILIZZANDO LA CLASSE SCANNER");
//		System.out.println();
//		
//		Scanner moise = new Scanner(System.in);
//		System.out.println("Inserisce Il primo numero");
//		
//		int num1 = moise.nextInt();
//		System.out.println("Inserisce Il secondo  numero (  0 )");
//        int  num2 = moise.nextInt();
//        
//		
//		try {
//			double divizione = num1/num2;
//			System.out.println(divizione);
//		} catch (Exception e) {
//			// TODO: handle exception
//			System.out.println(" Errore");
//		}
		
	}

}
