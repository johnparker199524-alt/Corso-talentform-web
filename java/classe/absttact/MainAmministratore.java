package it.classe.absttact;

public class MainAmministratore {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Amministratore a = new Amministratore("john","john@gmail.com");
		
		System.out.println("Nome : " + a.nome + " , Email : "+a.email);
		a.mostraRuolo();
	}

}
