package it.oop;

public class MainCellulare {

	
		public static void main(String[] args) {

			Cellulare cellulare = new Cellulare(0.0, 0);

			/** Ricarico il cellure di 50€. */

			cellulare.ricarica(50.0);

			/** Effettuo una chiamata di 15 minuti. */

			cellulare.chiamata(15.0);

			/** Stampo il credito. */
			System.out.println(cellulare.numero404() + "€");

			/** Stampo il numero di chiamate effettuate. */

			System.out.println("CHIAMATE EFFETTUATE :" + cellulare.getNumeroChiamate());

			/** Effettuo una chiamata di 10 minuti. */

			cellulare.chiamata(10.0);

			/** Stampo il credito. */
			System.out.println(cellulare.numero404() + "€");

			/** Stampo il numero di chiamate effettuate. */

			System.out.println("CHIAMATE EFFETTUATE :" + cellulare.getNumeroChiamate());

			/** Effettuo una chiamata di 15 minuti. */

			cellulare.chiamata(15.0);

			/** Stampo il credito. */
			System.out.println(cellulare.numero404() + "€");

			/** Stampo il numero di chiamate effettuate. */
			
			/** Azzero il numero di chiamate effettuate. */
			cellulare.azzeraChiamate();


			System.out.println("CHIAMATE EFFETTUATE :" + cellulare.getNumeroChiamate());

		
		}

}
