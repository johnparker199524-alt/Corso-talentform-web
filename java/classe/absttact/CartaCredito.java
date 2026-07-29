package it.classe.absttact;

public class CartaCredito extends Pagamento {

	@Override
	public void effettuaPagamento(int importo) {
		// TODO Auto-generated method stub
		System.out.println("Pagamento di " + importo + " € effettuato con carta di credito");
	}

}
