// scrivi un programma che conmtrolla se un numero è positivo

function controlNumber(num: number): number {
  if (num >0) {
    console.log("il numero " + num + " è positivo");
  }else if(num == 0){
        console.log("il numero " + num + " è uguale a zero");


  }
   else {
    console.log("il numero " + num + " non  è positivo");
  }
  return num;
}
controlNumber(0);

// controllo se un numero è pari o dispari
function pariDispari(num: number): number {
  if (num % 2 == 0) {
    console.log("il numero " + num + " è pari");
  } else {
    console.log("il numero " + num + " non  è pari");
  }
  return num;
}
pariDispari(4);

// controlla se un utente è maggiorene o minorente
function maggioreMinore(num: number): number {
  if (num >= 18) {
    console.log("sei maggiorenne perche hai " + num + " anni");
  } else {
    console.log("sei minorenne perche hai " + num + " anni");
  }

  return num;
}
maggioreMinore(25);
function multiplo5(num: number): number {
  if (num % 5 == 0) {
    console.log("il numero " + num + " è moltiplo di 5");
  } else {
    console.log("il numero " + num + " non  è moltiplo di 5");
  }
  return num;
};
multiplo5(7);
 
function cercaVocale(letter: string): string{
    let vocali: string[] =['a','o','i','u','e'];
    let trovato:boolean= false;
    for(let vocal of vocali){
        if(letter.toLowerCase() === vocal ){trovato=true;}
       
    }

     if(trovato ){
            console.log("la lettere "+ letter + " è una vocale");
            
        }else{
                        console.log("la lettere "+ letter + " non è una vocale");
                        

        }
    return letter;

};
cercaVocale('O');

// si poteva anche fare con la funzione includes()

// controlla se un numero è compreso tra 10 e 100
function traDieciCento(num: number): number{
    if( num >=10 && num <= 100){
       console.log("il numero "+ num  +" è compreso tra [10 , 100]");
    }else{
               console.log("il numero "+ num  +" non è compreso tra [10 , 100]");

    }
    return num;

};
traDieciCento(15);
// trova maggiore tra 2 numeri
function maggioriTraDueNumeri(num1: number, num2: number): number {
    if (num1 < num2) {
        console.log("Il maggiore è " + num2);
        return num2;
    } else if (num1 > num2) {
        console.log("Il maggiore è " + num1);
        return num1;
    } else {
        console.log("I numeri sono uguali");
        return num1; // Se sono uguali, restituire uno dei due è indifferente
    }
}

// Chiamata di test
maggioriTraDueNumeri(12, 5);

function ControlloStringaVuota(strin: string){
 if(strin.length == 0){
    console.log("Errore stringa Vuota");

 }else{
        console.log("stringa non Vuota");

 }

};
 ControlloStringaVuota("");
 // si poteva fare con il metodo isEmpty()
 let strin: string = "65";
 if (!strin) {
    // Se 'strin' è vuota, il punto esclamativo la trasforma in 'true'
    console.log("Errore stringa Vuota");
} else {
    console.log("stringa non Vuota");
}

// confronto di trenumeri
function maggioreMinoretrenum(num: number,num2: number, num3: number) {
  if (num > num2 && num> num3) {
    console.log("il maggiorenne  è " + num );
  } else if(num2 > num && num2 > num3){
    console.log("il maggiorenne  è " + num );
  }else if(num == num2 && num2 == num3){
        console.log(" numeri uguali");

  }
  else{
        console.log("il maggiore è " + num3 );

  }

}
maggioreMinoretrenum(2,25,25);
// maggiore tra 3 numeri
let num:number =5;
let numm2: number = 4;
let num3:number =7;

 if (num > numm2 && num> num3) {
    console.log("il maggiorenne  è " + num );
  } else if(numm2 > num && numm2 > num3){
    console.log("il maggiorenne  è " + num );
  }else if(num == numm2 && numm2 == num3){
        console.log(" numeri uguali");

  }
  else{
        console.log("il maggiore è " + num3 );

  }
  // stampa se un numero a 2 ciffre o no
  function controllosepiucifrre(num: number){

    if(num >=0 && num <=9){
              console.log("il numero ha un solo cifre " );

    }else if(num >9 && num <100 ){
                console.log("il numero ha 2 ciffre");

    }else if( num>=100 && num <1000){
                        console.log("il numero ha 3 ciffre");

    }

  };
  controllosepiucifrre(10);
  function punteggioBonus(voto: number){
    let test: boolean = true;
    let progetto: boolean = true;
    let bonus: number = 10;
    if( test && progetto){
       voto += bonus;
               console.log("superato");

    }else{
        console.log("non superato");
    }
  }
  punteggioBonus(10);

  // switch case
  let nomber: number=5;
  switch (nomber) {
    case 1: console.log("lunedi");
        
        break;
    case 2: console.log("martedi");
        
        break;
    case 3: console.log("mercoledi");
        
        break;
    case 4: console.log("Giovedi");
        
        break;
    case 5: console.log("Venerdi");
        
        break;
    case 6: console.log("sabato");
        
        break;
    case 7: console.log("domenica");
        
        break;
  
    default:  console.log("il primo giorno è lunedi");
        break;
  }
  // menu ristorante 
  const piatto: number =3;
  switch (piatto) {
    case 1: console.log("pizza");
    break;
    case 2: console.log("pasta");
    break;

    case 3: console.log("verdura");
        
        break;
  
    default:
         console.log("scegli tra 1-2");
        break;
  }
  // ricerca prodotto
  const idProdotto: number = 3;
  switch (idProdotto) {
    case 1: console.log("Nome: cellulare   prezzo: 35.00€ ");
    break;
    case 2:  console.log("Nome: iphone   prezzo: 350.00€ ");
    break;

    case 3:  console.log("Nome: computer   prezzo: 455.00€ ");
        
        break;
  
    default:
         console.log("scegli tra 1-3 per vedere la lista dei prodotti");
        break;
  }