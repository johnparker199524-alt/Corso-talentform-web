/*
 RICAVA IL REDDITO ANNUO NETTO DI UN LIBERO PROFESSIONISTA.. 
 ATTRIBUTI REDDITOANNOLORDO- COEFFREDD- ALIQUOTA INPS- ALIQUOTA IRPEF */

 class LiberoProfessionista {

           // proprieta
           
            redditoAnnoLordo: number;
            coeffRedd: number;
            aliquotaInps: number;
            aliquotaIrpef: number;


            // constructore

            constructor( redditoA:number, coeffRedd:number, aliquotaInps:number, aliquotaIrpef:number){

                this.redditoAnnoLordo = redditoA;
                this.coeffRedd = coeffRedd;
                this.aliquotaInps = aliquotaInps;
                this.aliquotaIrpef = aliquotaIrpef;
            }

                

           // getter& setter
           
           // metodi

           getRedditoImponnibile():number{

            return   (this.redditoAnnoLordo * this.coeffRedd )/100 ;
           }
       //
           getTassaInps():number{

            return (this.getRedditoImponnibile() * this.aliquotaInps)/100;
           }
           //

           getTassaIrpf():number{

            return (this.getRedditoImponnibile() * this.aliquotaIrpef)/100;
           }

           //
            getRedditoAnnuoNet():number{

                return this.redditoAnnoLordo - (this.getTassaIrpf() + this.getTassaInps());
            }

   



 }


 /// main 
 // invocazione

 let lp = new LiberoProfessionista(60000,67,26,15);

 let netto = lp.getRedditoAnnuoNet();

 console.log("**************** Fatturazione *****************");
 console.log(" il reddito Annuale è : " + netto +".00 € ");
