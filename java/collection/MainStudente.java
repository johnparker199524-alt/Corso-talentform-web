package it.collection;
import java.util.*;

public class MainStudente {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ArrayList<Studente> student = new ArrayList<Studente>();

		
		student.add(new Studente("John","parker","Isernia",31) );
		student.add(new Studente("Moise","Reacher","Milano",30) );
		student.add(new Studente("Paolo","Verdi","Torino",20) );
		student.add(new Studente("Mike","Diesel","Bolognia",22) );
		student.add(new Studente("Will","rick","Casino",19) );
		student.add(new Studente("Jack","Benson","Varese",32) );
		
		for(Studente s : student) {
			
			System.out.println(s);
		}
		
		//mostra solo gli studenti con eta > 20
		System.out.println();
		System.out.println("Eta <= 30");
		for(Studente st : student ) {
			
			if(st.eta <=25) {
				System.out.println(st);

			}
		}

	}

}
