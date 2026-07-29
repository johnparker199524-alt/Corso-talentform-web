package it.array;

public class Matrix3d {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/* Somma tutti gli elementi di una matrice 3x3. */

		int[][] matrix = { { 5, 10, 15 }, { 2, 4, 6 } , { 2, 4, 6 }, { 5, 9, 2 }};
		int som = 0;

		for (int i = 0; i < matrix.length; i++) {

			for (int c = 0; c < matrix[i].length; c++) {

				System.out.print(matrix[i][c] + " ");
				som += matrix[i][c];

			}System.out.print("  ");
		}
		System.out.println();
		System.out.println("La somma della Matrix è : "+ som);
	}

}
