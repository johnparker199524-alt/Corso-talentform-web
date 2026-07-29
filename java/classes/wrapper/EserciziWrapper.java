package it.classes.wrapper;

public class EserciziWrapper {

	public static void main(String[] args) {

//		Autoboxing
//		Traccia:
//		Dichiara una variabile int e assegnala a un oggetto Integer usando l'autoboxing.
		
		int a = 6;
		Integer oggetto = a;
		System.out.println("a da tipo int diventa di tipo Integer wrapper " +oggetto);
		
		
		
//		 Unboxing
//		 Traccia:
//		 Dichiara un oggetto Double e assegna il suo valore a una variabile double primitiva.

		
		Double d = 50.30;
		double c = d;
		System.out.println("c da tipo double diventa di tipo Double wrapper " + c);
	}

}
