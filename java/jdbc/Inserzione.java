package it.jdbc;
import java.sql.*;
public class Inserzione {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			// Connessione al database PostgreSQL
			Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", // URL del DB
					"postgres", // Utente
					"L'equilibre" // Password
			);

			System.out.println("Connesso!");

			try {
				// Crea la tabella studenti
//				Statement s = conn.createStatement();
//				String query = "CREATE TABLE ctf_studenti (" + "id INTEGER PRIMARY KEY, " + "nome VARCHAR(255), "
//						+ "eta INTEGER" + ")";
//				s.executeUpdate(query);
//				System.out.println("Tabella creata");
				
				
				// INSERIMENTO STUDENTE
				Statement stmt = conn.createStatement();
				stmt.executeUpdate("INSERT INTO ctf_studenti VALUES (1, 'Marco', 20)");
				System.out.println("Studente inserito");

				
				conn.close();
			} catch (Exception e) {
				System.out.println("C'è un errore nella query: " + e.getMessage());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
