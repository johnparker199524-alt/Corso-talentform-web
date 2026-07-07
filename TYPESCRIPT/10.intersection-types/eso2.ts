// custom con intersezione
// crea 2 custom type Persona e Contatto
// utlizza un  intersezione type per intersecare i precedenti oggeti

type Persona = {
  nome: string;
  cognome: string;
};
type Conttati = {
  email: string;
  tel: number;
};
type DatiCompleto = Persona & Conttati;

const person: DatiCompleto = {
  nome: "Romano",
  cognome: "Carl",
  email: "carl@gmail.it",
  tel: 256489465,
};

console.log(person);


//crea 2 custom type : auto e motore  intersecali con un type che vuoi 
// in modo che esce nell'ogetto : marca , modello , cavalli
type Auto = {
   
       marca:string;
       modello:string;

}
type Motore= {
   
      cavalli:number;
      cilindri:number;

}

type Machinna = Auto & Motore;

const auto:Machinna []=[

    {
         marca:"Ford-Ranger",
       modello:"FR-4X4",
        cavalli:800,
      cilindri:8
    },
    {
         marca:"Jeep-Wrangler",
       modello:"JPW-4X4",
        cavalli:900,
      cilindri:10
    }
];



console.log(auto[0]);
console.log(auto[1].marca);





// type PC = {
//   brandPC: string;
//     modelsPC: string[];
//    yearPC : number
// };

// type Smartphone = {
//       brandSmartphone: string;
//     modelsSmartPhone: string[];
//    yearSmartPhone : number
// };

// type Ecommerce = PC & Smartphone

// const ecommerce: Ecommerce  = {
//   brandPC: "Mac",
//   modelsPC: ["MacBook Pro M5", "MacBook Air M5", "MacBook Pro M1"],
//   yearPC: 2026,
//     brandSmartphone: "Apple Iphone",
//     modelsSmartPhone: ["Iphone 17", "Iphone 16", "Iphone 15"],
//        yearSmartPhone : 2026
// };

//   console.log(ecommerce );
