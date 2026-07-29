package it.controlflow;

public class While {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		  //incremento
		int i =1;
		while(i<=10) {
			System.out.println(i);
			
			if (i==5) {
				System.out.println("siamo a metta");
			}
			i++;
		}
		//System.out.println(i);
		
		// decremento
		System.out.println("========== Decremento=============");
		while(i>=-10) {
			System.out.println(i);
			
			if (i == -5) {
				System.out.println("siamo a metta");
			}
			i--;
			
			
		}
	}

}
