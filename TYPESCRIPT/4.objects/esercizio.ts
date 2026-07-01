// crea un modello oggetto

type Cittadino = {
  nome: string;
  cognome: string;
  eta: number;
  citta: string;
  mestiere: string;
};

const pers1: Cittadino = {
  nome: "john",
  cognome: "parker",
  eta: 25,
  citta: "Como",
  mestiere: "White Hacker",
};
console.log(pers1);
console.log(pers1.nome);

 //let nome: string;
//   let cognome: string;
//   let eta: number;
//   let citta: string;
//   let mestiere: string;

function crea(
     nome: string,
  cognome: string,
  eta: number,
  citta: string,
  mestiere: string
):Cittadino{

return{
    nome,
    cognome,
    eta,
    citta,
    mestiere
};

}

const primo : Cittadino = crea( 'mike','bridge',26,'isernia','hacker');

console.log(primo);


const pers2: Cittadino = {
  nome: "johny",
  cognome: "park",
  eta: 95,
  citta: "Milan",
  mestiere: "Hacker",
};
console.log(pers2);
console.log(pers2.nome);