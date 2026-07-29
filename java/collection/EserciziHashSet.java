package it.collection;

import java.util.*;

public class EserciziHashSet {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		HashSet<String> color = new HashSet<>(); // hashset è  un arraylist che cancella valori duplicati si lavora senza for()

		color.add("blu");
		color.add("blu");
		color.add("verde");
		color.add("yellow");
		
//		   ArrayList <String> h = new ArrayList<String>(color);
//		   Collections.sort(h);
//		   System.out.println(h);
		System.out.println(color);
		
		HashSet<String> citta = new HashSet<>(); //

		citta.add("Milano");
		citta.add("Roma");
		citta.add("Isernia");
		citta.add("Bologna");
		
		System.out.println(citta);
		System.out.println( "Esiste Milano ? : "+citta.contains("Milano"));
		// cancella un elemento 
		citta.remove("Bologna");
		System.out.println(citta);
         System.out.println("La lunghezzas degli elementi sono : "+citta.size());//lunghezza
         
         // stampare i valori in commune tra 2 HashSet
         System.out.println();
         
         HashSet<String> set1 = new HashSet<String>(List.of("uno","due","tre","quatro"));
         HashSet<String> set2 = new HashSet<String>(List.of("uno","due","sei","cinque"));
         System.out.println("stampare i valori in commune tra 2 HashSet : set1 e set2");
         set1.retainAll(set2); //sostitusce  set1 per i valori presenti sia in set1  e set2
         System.out.println(set1);
         
         
         /*
          * Crea 2 hashset di prodotti differenti e uniscili*/
         
         HashSet<String> prodotti1 = new HashSet<String>(List.of("iphone","samsumg","forno","tv","moto"));
         
         HashSet<String> prodotti2 = new HashSet<String>(List.of("googlepixel","scarpe","auto","maglietta","cuffie"));
         
         prodotti1.addAll(prodotti2);
         System.out.println("Crea 2 hashset di prodotti differenti e uniscili");
         System.out.println(prodotti1);
         
   

         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

         
         
         
         
         
         
         
         
         
	}

}
