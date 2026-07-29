package it.string;

public class Esercizi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Estrai un singolo carattere da una stringa 
		 * Verifica se una stringa è vuota
		 */
		
		String prima = "javaScript";
		String vuota ="";
		char carrattere = prima.charAt(4);
		System.out.println(carrattere);
		System.out.println();
		System.out.println(prima.isEmpty());
		System.out.println();
		System.out.println(vuota.isEmpty());
		// rimuovi vocali della parola programmazione
		
		int arr []= {2,5};
	
		String word = "programmazione";
		String l = word.replaceAll("[aouie]", "");
		System.out.println(l);
//		// Opzione A: Usa (?i) per ignorare maiuscole/minuscole (consigliato)
//		String l = word.replaceAll("(?i)[aeiou]", "");
//
//		// Opzione B: Includi esplicitamente le maiuscole
//		String l = word.replaceAll("[aeiouAEIOU]", "");


	}

}
