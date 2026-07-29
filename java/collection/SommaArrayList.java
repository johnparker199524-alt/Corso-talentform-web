package it.collection;

import java.util.*;

public class SommaArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/*
		 * Copia in un altro ArrayList Traccia: Copia tutti gli elementi di una lista di
		 * stringhe da una lista a un’altra.
		 */
		
		
		ArrayList <String> lista = new ArrayList<String>();
		
		lista.add("JavaScript");
		lista.add("Java");
		lista.add("Spring");
		lista.add("React");
		lista.add("Mysql");
	
		// clono il primo array
		ArrayList <String> copia = new ArrayList<String>(lista);
		
		Collections.sort(copia);
		
		   System.out.println("===== array clonato =======");
		   System.out.println();
			for(String c : copia ) {
				
				System.out.println(c);
			}
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		/*
		 * Somma dei numeri Traccia: Calcola la somma degli interi in un ArrayList.
		 */

//		ArrayList<Integer> numeri = new ArrayList<Integer>();
//		
//		        numeri.add(5);
//		        numeri.add(5);
//		        numeri.add(5);
//		        numeri.add(5);
//		        numeri.add(5);
//		        
//		        Integer somma = 0;
//		        for(Integer n : numeri) {
//		        	
//		        	somma+=n;
//		        }
//              
//		        System.out.println("La somma degli elementi della lista è : -> "+ somma);
//		
	}

}
