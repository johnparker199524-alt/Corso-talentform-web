package it.classe.absttact;

public class Automobile extends MezzoTrasporto {

	public Automobile(String marca, String modello) {
		super(marca, modello);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void avvia() {
		// TODO Auto-generated method stub
		System.out.println("Marca : "+ super.marca + " , Modello "+ super.modello);
		System.out.println("L'automobile è stata avviata");
	}

}
