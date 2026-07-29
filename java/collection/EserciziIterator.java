package it.collection;

import java.util.*;

public class EserciziIterator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		
		// moltiplica gli elementi di una lista per 2 e salva all'interno di unna nuova lista utilizzando iterator
		List<Integer> list1 = Arrays.asList(1,2,3,4,5);
		Iterator<Integer> doppio = list1.iterator();
		
		List<Integer> list2 = new ArrayList <Integer>();

		//list2.addAll(list1);
		

		while( doppio.hasNext()) {
			
        
        list2.add(doppio.next()*2);
          
		}
		Iterator<Integer> mostraNuovo = list2.iterator();
	
		while( mostraNuovo.hasNext()) {
			
	         System.out.print(mostraNuovo.next()+" x");
			}
		
		
		
		
		System.out.println();
		//contta i numeri pari di una lista 
		System.out.println("contta i numeri pari di una lista ");
		System.out.println();
		List<Integer> num = Arrays.asList(2,3,4,7,9,10,20);
		
		Iterator<Integer> parita = num.iterator();
		
		int pari =0;
		while(parita.hasNext()) {
			if(parita.next() % 2 ==0) {
				
				pari++;
			}
		}
		
		System.out.println("Nella lista ci sono " +pari +" Numeri pari");
		
		
		System.out.println();
		
		/*Trova il numero più alto di una lista di numeri*/
		System.out.println("Trova il numero più alto di una lista di numeri");
		System.out.println();
		List<Integer> numeri = Arrays.asList(5, 10, 20, 25);
		
		Iterator<Integer> max = numeri.iterator();
		
		Integer piuAlto = 0;
		while(max.hasNext()) {
			
			if(max.next() > piuAlto) {
				
				piuAlto = max.next();
			}
			
		}
		System.out.println(" Il numero piu grande della Lista è : " + piuAlto);
		
		
		
		
		System.out.println();
		/* Somma tutti gli elementi di una lista di interi utilizzando iterator */
		System.out.println("Somma tutti gli elementi di una lista di interi utilizzando iterator");
		System.out.println();

		List<Integer> number = Arrays.asList(5, 10, 20, 25);

		Iterator<Integer> itera = number.iterator();

		Integer somma = 0;
		while (itera.hasNext()) {

			somma += itera.next();

		}

		System.out.println("La somma è : " + somma);

		// conta gli elementi presenti
		List<String> citta = Arrays.asList("milano", "isernia", "roma");

		Iterator<String> i = citta.iterator();
		int count = 0;
		while (i.hasNext()) {
			System.out.println(i.next() + " ");
			count++;
		}
		System.out.println();
		System.out.print("numero degli elementi presenti in citta : " + count);
		System.out.println();

		List<String> nomi = Arrays.asList("moise", "mike", "jonas", "wembley");

		// chiamo l'oggetto itterator che serve per ciclare una lista
		Iterator<String> cicla = nomi.iterator();

		while (cicla.hasNext()) {
			System.out.print(cicla.next() + " ");
		}
		System.out.println();
		List<Integer> numbe = Arrays.asList(5, 6, 7, 8, 9, 10);

		Iterator<Integer> it = numbe.iterator();

		while (it.hasNext()) {

			System.out.print(it.next() + " ");
		}
	}

}
