package it.interfacce;

public class PreventivoApp implements IAppWeb, IAppMobile {

	protected int giornateMockup;
	protected int giornateDatabase;
	protected int giornateMultilanguage;
	protected int giornateTestApp;
	protected int giornatePublishApp;
	protected int giornateWebServices;
	protected int giornateDeploy;
	protected double tariffaGiornaliera;

	public PreventivoApp(int giornateMockup, int giornateDatabase, int giornateMultilanguage, int giornateTestApp,
			int giornatePublishApp, int giornateWebServices, int giornateDeploy, double tariffaGiornaliera) {
		
		
		this.giornateMockup = giornateMockup;
		this.giornateDatabase = giornateDatabase;
		this.giornateMultilanguage = giornateMultilanguage;
		this.giornateTestApp = giornateTestApp;
		this.giornatePublishApp = giornatePublishApp;
		this.giornateWebServices = giornateWebServices;
		this.giornateDeploy = giornateDeploy;
		this.tariffaGiornaliera = tariffaGiornaliera;
	}

	@Override
	public double getMultilanguage() {

		return tariffaGiornaliera * giornateMultilanguage;
	}

	@Override
	public double getTestApp() {

		return tariffaGiornaliera * giornateTestApp;
	}

	@Override
	public double getPublishApp() {

		return tariffaGiornaliera * giornatePublishApp;
	}

	@Override
	public double getMockup() {

		return tariffaGiornaliera * giornateMockup;
	}

	@Override
	public double getWebServices() {

		return tariffaGiornaliera * giornateWebServices;
	}

	@Override
	public double getDatabase() {
		return tariffaGiornaliera * giornateDatabase;
	}

	@Override
	public double getDeploy() {

		return tariffaGiornaliera * giornateDeploy;
	}

	public double totalePreventivo() {

		return getDeploy() + getDatabase() + getWebServices() + getMockup() + getPublishApp() + getTestApp()
				+ getMultilanguage();
	}

}