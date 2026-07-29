package it.oop;

public class Car {

	/*
	 * Progettare e realizzare una classe Car(automobile) con le proprietà seguenti.
	 * Un’automobile ha una determinata resa del carburante (misurata in
	 * miglia/galloni o in litri/chilometri: scegliete il sistema che preferite) e
	 * una certa quantità di carburante nel serbatoio. La resa è specificata dal
	 * costruttore e il livello iniziale del carburante è a zero. Fornire questi
	 * metodi: un metodo drive per simulare il percorso di un’automobile per una
	 * certa distanza, riducendo il livello di carburante nel serbatoio; un metodo
	 * getGas, per ispezionare il livello corrente del carburante; un metodo addGas
	 * per far rifornimento. Consigli: S’invita a porre particolare attenzione al
	 * metodo drive(double km), che calcola il livello di carburante dopo un certo
	 * percorso.
	 */
	// 1km -> 1L
	// 10km -> xL => x = d*l
	// attributi

	public double resaCarburante;
	public double gas;

//costrutttore
	public Car(double kilometriLitro) {

		this.resaCarburante = kilometriLitro;
		this.gas = 0;
	}

	// drive
	public void drive(double kilometri) {
	    double gasNecessario = kilometri / resaCarburante;
	    
	    if (this.gas >= gasNecessario) {
	        this.gas -= gasNecessario;
	    } else {
	        System.out.println("Non hai abbastanza carburante per percorrere " + kilometri + " km!");
	    }
	}
//	public void drive(double kilometri) {
//
//		
//		this.gas = gas - (kilometri / resaCarburante);
//
//	}

	// controlla benzina
	public double getGas() {
		return gas;
	}

	// aggiungi benzina
	public void addGas(double rifornimento) {

		this.gas = gas + rifornimento;

	}
	

}
