package it.sintax;

import java.util.Scanner;

public class Sintassi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("Ciao John");
		Scanner input = new Scanner(System.in);
		Scanner str = new Scanner(System.in);
// tipi primitivi
		// int
		//int i = input.nextInt();
		int i = 65;
		System.out.println(i);
		// string
		//String a = str.nextLine();
		String a = "John";
		System.out.println(a);
		// double
		Double n= 2.00;
		System.out.println(n);
		
		//long
        long iban = 2451528333514764444L;
		System.out.println(iban);

		// boolean
		boolean si = true;
		System.out.println(si);
// ctrl+7 per commentare 
		// Float 
		float num = 5.6f;
		System.out.println(num);

		//caratteri
		char x = '/';
		System.out.println(x);

	}

}
