package it.oop;

public class MainCar {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Car c = new Car(10);    

		c.addGas(5); // rifornimento
		c.drive(50);  //  spostamento
	   System.out.println(" Gas nel sebatoio : "+ c.getGas());	

	}

}
