package it.date;
import java.time.*;
import java.time.format.DateTimeFormatter;
public class ContolloData {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
           
		/* Controlla se il 1 gennaio 2000 è una data passata.*/
		
//		
//		LocalDate dataCorrente = LocalDate.now();
		
		LocalDate dataPass = LocalDate.of(2000, 1, 1);  // setare la data
		
		boolean passata = dataPass.isBefore(LocalDate.now()); // confontare 2 date
		System.out.println(passata);
		
		
		/*Stampa l’anno, il mese e il giorno dalla data di oggi.*/
		
		LocalDate dataCorrente = LocalDate.now();
		System.out.println("Year : "+dataCorrente.getYear());
		System.out.println("Mese : "+dataCorrente.getMonth());
		System.out.println("Giorno : "+dataCorrente.getDayOfMonth());


		
		/*
		 * Formatta la data 2025-03-10 nel formato 10/03/2025.*/
		
		LocalDate formatazione = LocalDate.of(2025,03,10);
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		
		System.out.println("Data Formattata : "+formatazione.format(formatter));
		
		 
		
		
	}

}
