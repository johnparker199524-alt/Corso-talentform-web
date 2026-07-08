// // static 
// // RICAVA IL REDDITO ANNUO NETTO DI UN LIBERO PROFESSIONISTA..
// // ATTRIBUTI REDDITOANNOLORDO- COEFFREDD- ALIQUOTA INPS- ALIQUOTA IRPEF */
// class LiberoProfessionista {
 
//   static redditoAnnoLordo: number;
//   static coeffRedd: number;
//   static aliquotaInps: number;
//   static aliquotaIrpef: number;

//   constructor(
  
//     redditoA: number,
//     coeffRedd: number,
//     aliquotaInps: number,
//     aliquotaIrpef: number,
//   ) {
    
//       LiberoProfessionista.redditoAnnoLordo = redditoA;
//       LiberoProfessionista.coeffRedd = coeffRedd;
//       LiberoProfessionista.aliquotaInps = aliquotaInps;
//       LiberoProfessionista.aliquotaIrpef = aliquotaIrpef;
    
  
//   }

//   static getImponibile() : number {
//     return (LiberoProfessionista.redditoAnnoLordo* LiberoProfessionista.coeffRedd)/100
//   }
  
//   static getTassaInps() : number {
//     return (LiberoProfessionista.getImponibile () * LiberoProfessionista.aliquotaInps)/100
//   }
// static getTassaIrpef() : number {
//   return ( LiberoProfessionista.getImponibile() - LiberoProfessionista.getTassaInps() ) * LiberoProfessionista.aliquotaIrpef /100
// }
// static getRedditoAnnuoNetto() : number {
//   return LiberoProfessionista.redditoAnnoLordo - (LiberoProfessionista.getTassaInps() + LiberoProfessionista.getTassaIrpef())
// }
// }
// let lp= new LiberoProfessionista ( 50000, 78, 26, 15);
// let netto = LiberoProfessionista.getRedditoAnnuoNetto();

// console.log("Reddito annuo netto:" + netto  + "€");
