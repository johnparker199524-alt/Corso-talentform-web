package it.collection;

import java.util.*;

public class MainProdotto {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ArrayList<Prodotto> pr = new ArrayList<Prodotto>();

		pr.add(new Prodotto(1, "Cellulare", "Iphone17", 1700.0));
		pr.add(new Prodotto(2, "computer", "Azus", 1500.0));
		pr.add(new Prodotto(3, "tablet", "samsung z18", 700.0));
		pr.add(new Prodotto(4, "Cellulare", "Google pixel 11", 1800.0));
		pr.add(new Prodotto(5, "computer", "Compaq", 800.0));
		pr.add(new Prodotto(6, "Cellulare", "Iphone16", 900.0));

		for (Prodotto p : pr) {

			System.out.println(p);
		}

		/*
		 * Traccia: Dato un ArrayList<Prodotto>, stampa solo quelli con importo >
		 * 1000.00.
		 */
		
		System.out.println();
		System.out.println("======= Prodotto con prezzo < 1000€ ======");
		for (Prodotto p2 : pr) {


			if (p2.prezzo < 1000.0) {
				System.out.println(p2);
			}
		}
		
		// uso delComparatore per ordinare in funzione dell'id
		System.out.println();
		System.out.println("Compraring dall'id ");

		pr.sort(Comparator.comparingInt(pt ->pt.id)); // si usa se si lavora con model dei classe 
		System.out.println(pr);
		// uso delComparatore per ordinare in funzione dei nomi
		System.out.println();
		pr.sort(Comparator.comparing(s ->s.nome));
		System.out.println("Compraring dal nome ");
		System.out.println(pr);

	}

}
