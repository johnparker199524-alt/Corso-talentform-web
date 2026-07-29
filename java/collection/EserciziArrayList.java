package it.collection;

import java.util.*;


public class EserciziArrayList {
    public static void main(String[] args) {
    	
    	
    	
    	
    	ArrayList<String> nomiStudenti = new ArrayList<String>();
    	nomiStudenti.add("Marco");
    	nomiStudenti.add("Andrea");
    	nomiStudenti.add("Luca");
    	nomiStudenti.add("Mirko");

    	nomiStudenti.set(1, "Fabio");

    	for (String lista : nomiStudenti) {
    	System.out.println("Nome studente :" + lista);
    	}

    	System.out.println("---------------------");

    	ArrayList<Integer> codiceProdotto = new ArrayList<Integer>();
    	codiceProdotto.add(1);
    	codiceProdotto.add(2);
    	codiceProdotto.add(3);
    	codiceProdotto.add(4);
    	codiceProdotto.add(15);

    	codiceProdotto.remove(Integer.valueOf(15));

    	for (Integer n : codiceProdotto) {
    	System.out.println("Codice Prodotto N° :" + n);
    	}

    	System.out.println("Totale : " + codiceProdotto.size());

    	System.out.println("---------------");

    	System.out.println("ELEMENTO TROVATO IN POSIZIONE:" + codiceProdotto.get(1));


    	ArrayList<String> city = new ArrayList<String>();

    	city.add("Milano");
    	city.add("Palermo");
    	city.add("Napoli");
    	city.add("Roma");

    	System.out.println("Citta' trovata ? " + city.contains("Roma"));


    	ArrayList<String> city1 = new ArrayList<String>();

    	city1.add("Milano");
    	city1.add("Palermo");
    	city1.add("Napoli");
    	city1.add("Roma");

    	System.out.println("Citta' trovata ? " + city1.contains("Roma"));

    	city1.clear();
    	System.out.println("La lista è vuota ? "+ city1.isEmpty());


    	ArrayList<Integer> age = new ArrayList<Integer>();

    	age.add(45);
    	age.add(23);
    	age.add(33);
    	age.add(43);
    	age.add(15);

    	Collections.sort(age);

    	for (Integer n : age) {
    	System.out.println("Eta' dal più piccolo al piu' grande :" + n);

    	}

    	ArrayList<String> nations = new ArrayList<String>();

    	nations.add("Italia");
    	nations.add("Spagna");
    	nations.add("Argentina");
    	nations.add("Brasile");
    	nations.add("Svezia");

    	Collections.sort(nations);

    	for (String n : nations) {
    	System.out.println("Nazione in ordine crescente :" + n);

    	}

    	//Traccia: Crea un ArrayList di caratteri e stampalo.

    	ArrayList<Character> caratteri = new ArrayList<Character>();

    	caratteri.add('D');
    	caratteri.add('F');
    	caratteri.add('L');
    	caratteri.add('G');
    	caratteri.add('M');
    	caratteri.add('P');

    	caratteri.set(4, 'N');
    	caratteri.remove(Character.valueOf('P'));

    	for (Character c : caratteri) {
    	System.out.println(c);

    	}

    	System.out.println("LUNGHEZZA LISTA :" + caratteri.size());


    	//Somma dei numeri
    	//Traccia: Calcola la somma degli interi in un ArrayList.


    	ArrayList<Integer> numeri = new ArrayList<Integer>();

    	numeri.add(5);
    	numeri.add(5);
    	numeri.add(5);
    	numeri.add(5);
    	numeri.add(5);

    	Integer somma = 0;
    	for(Integer n : numeri) {

    	somma+=n;
    	}

    	System.out.println("La somma degli elementi della lista è : -> "+ somma);

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


    	ArrayList <String> copia = new ArrayList<String>(lista);

    	System.out.println("===== array clonato =======");
    	System.out.println();
    	for(String c : copia ) {

    	System.out.println(c);
    	}



        // ArrayList di partenza con duplicati
        ArrayList<String> listaConDuplicati = new ArrayList<>(List.of("Mela", "Banana", "Mela", "Pera", "Banana"));

        // Creiamo un LinkedHashSet passando la lista originale
        LinkedHashSet<String> insiemeUnico = new LinkedHashSet<>(listaConDuplicati);

        listaConDuplicati.clear();
      //  listaConDuplicati.addAll(insiemeUnico);
     // 1. Con addAll() - CONSIGLIATO (1 sola riga, rapido e ottimizzato)
       // listaConDuplicati.addAll(insiemeUnico); //best

        // 2. Con add() - Richiede un ciclo manuale
        for (String elemento : insiemeUnico) {
            listaConDuplicati.add(elemento);
        }
        
        System.out.println(listaConDuplicati);
        // Ricreiamo una nuova ArrayList senza duplicati
//        ArrayList<String> listaSenzaDuplicati = new ArrayList<>(insiemeUnico);
//
//        System.out.println(listaSenzaDuplicati); 
        // Output: [Mela, Banana, Pera] (l'ordine originale è preservato)
    }
}