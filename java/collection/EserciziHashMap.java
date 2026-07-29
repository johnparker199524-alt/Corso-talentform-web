package it.collection;

//import java.util.HashSet;
import java.util.*;

public class EserciziHashMap {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

        /*
         * Crea 2 hashset di prodotti differenti e uniscili*/
        
        HashMap<Integer,String> prod = new HashMap<Integer,String>(); // si lavora senza for 
        
        
   prod.put(1,"pizza");
   prod.put(2,"peperoni");
   prod.put(3,"mozarella");
   prod.put(4,"pasta");
   prod.put(5,"uova");

   System.out.println("Crea 2 hashset di prodotti differenti e uniscili");
        System.out.println(prod);
        System.out.println();
        
        // stampa i giorni della settimana
        System.out.println("Giorni della settimana");
        
        HashMap<Integer,String> giorni = new HashMap<Integer,String>();
        giorni.put(1,"Lunedi");
        giorni.put(2,"martedi");
        giorni.put(3,"mercoledi");
        giorni.put(4,"giovedi");
        giorni.put(5,"venerdi");
        giorni.put(6,"sabato");
        giorni.put(7,"domenica");
        System.out.println(giorni);

        // controlla se la chiave 6 è presente 
        System.out.println("il giorno 6 esiste : ? " + giorni.containsKey(6));
       
//        HashMap<String, Integer> mappa = new HashMap<>();
//        mappa.put("Mela", 5);
//        mappa.put("Banana", 3);
//
//        mappa.forEach((chiave, valore) -> {
//            System.out.println("Frutto: " + chiave + " -> Quantità: " + valore);
//        });
        
        
        // crea una mappa prodotto 
        
        
        
        HashMap<Integer,String> mapa = new HashMap<>();
        
        mapa.put(1, "Iphone18");
        mapa.put(2, "macbook");
        mapa.put(3, "lenovo");
        mapa.put(4, "samsung");
        mapa.put(5, "azus");

        System.out.println(mapa);
        System.out.println();
        System.out.println("Verifica se esiste il prodotto azus");
        System.out.println();
        System.out.println("esiste   ancora il prodotto azus ? : " + mapa.containsValue("azus"));
        //Stampa tutte le chiavi della mappa  con il metodo keySet()
        System.out.println();
        System.out.println("Stampa tutte le chiavi della mappa  con il metodo keySet()");
        for(Integer k : mapa.keySet() ) {
        	System.out.print(k);
        }

        //stampa i giorni della settimana
        System.out.println("stampa i giorni della settimana");
        
        for(String g : giorni.values()) {
        	System.out.print(g);
        }
        
        System.err.println();
        System.out.println("stampa i numeri di elementi della map");
        System.out.println(giorni.size());
        
        
        
        
        
        
        
        
        
        
        
        
        
        
	}
	

}
