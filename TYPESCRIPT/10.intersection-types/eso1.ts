/*

Esercizio 1 (Mix-in di dati):
Crea un tipo DettagliAuto (con marca: string e modello:
 string) e un tipo SpecificheElettriche 
 (con autonomiaKm: number e capacitaBatteria: number).
  Crea un tipo intersecato AutoElettrica e istanzia
  un oggetto funzionante.
*/

type DettagliAuto ={
    marca : string,
    modello: string
}

type SpecificheElettriche = {

    autonomiaKm : number,
    capacitaBatteria : number
}
type AutoElettrica = DettagliAuto & SpecificheElettriche;
const auto:AutoElettrica = {

    marca: "Ford",
    autonomiaKm : 300,
    modello : "AY-57B",
    capacitaBatteria: 75
}
console.log(auto);