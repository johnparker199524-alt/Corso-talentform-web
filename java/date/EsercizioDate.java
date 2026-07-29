package it.date;
import java.time.*;
import java.time.temporal.*;


public class EsercizioDate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
// stampare la data di oggi
		
		LocalDate oggi = LocalDate.now();
		System.out.println( "oggi è :  "+oggi);
		
		// settare listanza
		
		LocalDate data = LocalDate.of(2026, 9, 18);
		System.out.println(data);
		// aggiungo 30 giorni alla data di oggi
		LocalDate add  = oggi.plusDays(30);
		System.out.println(" + 30 day "+ add);
		//
        //Stampa il numero di giorni tra oggi e il 25 dicembre 2026.
        
        
            //data di partenza 
        LocalDate natale = LocalDate.of(2026, 12, 25);
        // calcola pe sapere quanto giorni fino a natale
        long giorni = ChronoUnit.DAYS.between(oggi, natale);
        System.out.println("Giorni fino a Natale: " + giorni);
		
		
	}

}
