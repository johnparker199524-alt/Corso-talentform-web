package it.collection;

/*ArrayList di oggetti
Traccia:
Crea una classe Prodotto con
 id-nome -brand-prezzo. Crea un ArrayList<Prodotto>
 , aggiungi 6 prodotti e stampali.*/

public class Prodotto {

	public int id;
	public String nome;
	public String brand;
	public double prezzo;
	// costructore

	public Prodotto(int id, String nome, String brand, double prezzo) {

		this.id = id;
		this.nome = nome;
		this.brand = brand;
		this.prezzo = prezzo;
	}

	@Override
	public String toString() {
		return "Prodotto [id=" + id + ", nome=" + nome + ", brand=" + brand + ", prezzo=" + prezzo + "€ ]";
	}

	// toString

}
