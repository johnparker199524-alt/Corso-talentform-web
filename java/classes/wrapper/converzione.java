package it.classes.wrapper;

public class converzione {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
// convertire la stringa "123" in un numero usando il metodo statico di Integer

		String s = "123";
		Integer i = Integer.valueOf(s);
		System.out.println(i);
		System.out.println("=============================================");

		// crea 2 oggeti Integer con il valore 1000 e verifica se sono uguali con il
		// metodo equals()

		Integer e = 1000;
		Integer j = 1000;
		
		System.out.println(e.equals(j)); // tipo di dato e il valore
		System.out.println(e == j); // compara il riferimento

		// int -> string
		System.out.println("====================================");

		int o =5;
		String nome = Integer.toString(o);
		
		// conversione da string a boolean
		
		String b = "true";
		boolean bo = Boolean.parseBoolean(b);
		
		System.out.println("====================================");
		System.out.println(bo);
		
	}

}
