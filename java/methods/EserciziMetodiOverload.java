package it.methods;

public class EserciziMetodiOverload {
	
	// ==================================2===============================================================================

	public String getStudente(String nome, String cognome, String residenza, String citta) {

		return nome + " " + cognome + " " + residenza + " " + citta;
	}

	public int getStudente(int telefono) {

		return telefono;
	}
	
	
	// ==================================2===============================================================================

	
	
	// ==================================1===============================================================================

 
	// in Overload utilizziamo un meto piu volte cambianda suo tipo e suo compito 
	public int getAritmetica(int a, int b) {

		return a + b;

	}

	public float getAritmetica(float c, float d) {

		return c - d;

	}

	public double getAritmetica(double e, double f) {

		return e * f;

	}
	// ==================================1===============================================================================

	public static void main(String[] args) {

		// =================================2===============================================================================
	
		EserciziMetodiOverload anagrafica = new EserciziMetodiOverload();

		String nome = "Mario";
		String cognome = "Rossi";
		String residenza = "Via Napoli 66";
		String citta = "Roma";
		int telefono = 1234567890;

		System.out.println(
				"NOME - COGNOME - RESIDENZA CITTA' :" + anagrafica.getStudente(nome, cognome, residenza, citta));
		System.out.println("NUMERO DI TELEFONO :" + anagrafica.getStudente(telefono));
		
		// ==================================2===============================================================================

		// ==================================1===============================================================================
		EserciziMetodiOverload aritmetica = new EserciziMetodiOverload();

		int a = 5;
		int b = 4;
		float c = 8.9f;
		float d = 6.3f;
		double e = 32.50;
		double f = 15.30;

		System.out.println("SOMMA :" + aritmetica.getAritmetica(a, b));
		System.out.println("SOTTRAZIONE :" + aritmetica.getAritmetica(c, d));
		System.out.println("MOLTIPLICAZIONE :" + aritmetica.getAritmetica(e, f));
		// ==================================1===============================================================================


	}
}
