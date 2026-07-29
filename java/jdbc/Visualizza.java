package it.jdbc;

import java.sql.*;

public class Visualizza {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Parametri di connessione (modifica la password se necessario)
		String url = "jdbc:postgresql://localhost:5432/postgres";
		String user = "postgres";
		String password = "L'equilibre"; // oppure "6586"

		// Try-with-resources: chiude automaticamente Connection, Statement e ResultSet
		try (Connection conn = DriverManager.getConnection(url, user, password)) {
			System.out.println("Connesso al database!");

			// 1. Definiamo la query SELECT con i Text Blocks (""")
			String selectQuery = """
					SELECT id, nome, eta
					FROM ctf_studenti2
					ORDER BY id ASC
					""";

			// 2. Creiamo lo Statement ed eseguiamo la query
			try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(selectQuery)) {

				System.out.println("\n--- ELENCO STUDENTI ---");

				// 3. Il ciclo while sccorre i risultati riga per riga
				while (rs.next()) {
					// Recuperiamo i dati delle colonne usando il nome della colonna o il tipo
					int id = rs.getInt("id");
					String nome = rs.getString("nome");
					int eta = rs.getInt("eta");

					// Stampiamo le informazioni a schermo
					System.out.println("ID: " + id + " | Nome: " + nome + " | Età: " + eta);
				}

				System.out.println("-----------------------\n");
			} catch (Exception e) {
				System.out.println("Errore durante la lettura dei dati: " + e.getMessage());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
