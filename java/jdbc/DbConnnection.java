package it.jdbc;
import java.sql.*;

public class DbConnnection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		try {
//			// Connessione al database PostgreSQL
//			Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", 
//					"postgres", 
//					"L'equilibre" 
//			);
//
//			System.out.println("Connesso al db !");
//
//			try {
//				// Crea la tabella studenti
//				Statement s = conn.createStatement();
//				String query = "CREATE TABLE ctf_studenti2 (" + "id INTEGER PRIMARY KEY, " + "nome VARCHAR(255), "
//						+ "eta INTEGER" + ")"; //""" Evita la concatenazione inutile""" 
//				s.executeUpdate(query);
//				System.out.println("Tabella creata");
//				conn.close();
//			} catch (Exception e) {
//				System.out.println("C'è un errore nella query: " + e.getMessage());
//			}
//
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//
//		
		
		
		  try {
			// Connessione al database PostgreSQL
			Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", // URL del DB
					"postgres", // Utente
					"L'equilibre" // Password
			);

			System.out.println("Connesso al db  riuscita!");

			try {
				// Crea la tabella studenti
//				Statement s = conn.createStatement();
//				String query = "CREATE TABLE ctf_studenti (" + "id INTEGER PRIMARY KEY, " + "nome VARCHAR(255), "
//						+ "eta INTEGER" + ")";
//				s.executeUpdate(query);
//				System.out.println("Tabella creata");
				
				
				// INSERIMENTO STUDENTI
				Statement stmt = conn.createStatement();
				
			    stmt.executeUpdate("INSERT INTO ctf_studenti2 VALUES (2, 'Giulia', 21)");
			    stmt.executeUpdate("INSERT INTO ctf_studenti2 VALUES (3, 'Paolo', 24)");
			    stmt.executeUpdate("INSERT INTO ctf_studenti2 VALUES (4, 'Chiara', 22)");

				
				
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
