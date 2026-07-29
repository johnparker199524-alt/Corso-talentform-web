package it.array;

public class EserciziArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] array = new int[5];
		for (int i = 0; i < array.length; i++) {
			array[i] = i + 1;
		}
		System.out.println(array[0]);
		

		String[] arr = { "rosso", "verde", "giallo", "blu" };
/// int [] arr = int [5] // con lunghezza 
/// int [] array = {}  // senza lunghezza
		for (String g : arr) {

			System.out.println(g );
		}
//		int[] valo = new int[5];
//
//		valo[0] = 1;
//		valo[1] = 2;
//		valo[2] = 3;
//		valo[3] = 4;
//		valo[4] = 5;
//		
		// somma gli elementi dell'array
		int [] valo =  {1,2,3,4,5};
		int somma = 0;
		for(int i=0; i<valo.length;i++) {
			
			somma+= valo[i];
		}
		System.out.println(somma);
		
	}

}
