package it.interfacce;

public class Smartphone implements IProdotto {

	protected String nome;
	protected double prezzo;

	public Smartphone(String nome, double prezzo) {

		this.nome = nome;
		this.prezzo = prezzo;
	}

	@Override
	public void mostraInformazioni() {

		System.out.println("Nome Smartphone : " + nome);
		System.out.println("PrezzoSmartphone : " + prezzo + " €");

	}

}

