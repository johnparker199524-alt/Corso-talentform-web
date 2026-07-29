package it.array;

public class Tridimensionali {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

// STAMPA I VALORI CONTENUTI NELLA MATRICE
		
        int[][] matrice = {
                {1, 2, 3},
                {4, 5, 6},
                {5, 3, 2}
            };

//            for (int i = 0; i < matrice.length; i++) {
//                for (int j = 0; j < matrice[i].length; j++) {
//                    System.out.print(matrice[i][j] + " ");
//                }
//                System.out.println();
//            }
//		
        
        
        /*Somma tutti gli elementi di una matrice 3x3.*/
        
        int somma =0;
        for(int i = 0; i<matrice.length; i++) {
        	
        	for(int j =0; j< matrice[i].length; j++) {
        		somma += matrice[i][j];
        	}
        }
        System.out.println( "la somma è :"+somma);
        
        
        
        
        
        
        
        
        
	}

}
