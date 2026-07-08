// RICAVARE LO STIPENDIO NETTO MENSILE DOPO AVER SOTTRATTO
//  LE TASSE INPS E IRPEF DEI LAVORATORI AUTONOMI



class Docente {

    redditoAnnuoLordo: number
    coeffRedd: number
    aliquotaInps: number
    aliquotaIrpef: number
    

    constructor(redditoAnnuoLordo: number, coeffRedd: number, aliquotaInps: number, aliquotaIrpef: number) {


        this.redditoAnnuoLordo = redditoAnnuoLordo
        this.coeffRedd = coeffRedd
        this.aliquotaInps = aliquotaInps
        this.aliquotaIrpef = aliquotaIrpef


    }


    getImponibile() : number {
        return (this.redditoAnnuoLordo * this.coeffRedd) / 100

    }
    

    getTassaInps() :number {

        return (this.getImponibile() * this.aliquotaInps) / 100

    }


    getTassaIrpef() :number {
        

        return (this.getImponibile() - this.getTassaInps()) * this.aliquotaIrpef /100
    }


    getStipendioMensile() : number {

     return (this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef()))/12


    }


}

let docente = new Docente(50000, 78, 26, 15)

let dc = docente.getStipendioMensile()
console.log('STIPENDIO MENSILE DOCENTE :' + dc + ' €');





class Avvocato extends Docente {


    constructor(redditoAnnuoLordo: number, coeffRedd: number, aliquotaInps: number, aliquotaIrpef: number) {
         
        super(redditoAnnuoLordo, coeffRedd, aliquotaInps, aliquotaIrpef)


    }
    
      getImponibile() : number {
        return (this.redditoAnnuoLordo * this.coeffRedd) / 100

    }
    

    getTassaInps() :number {

        return (this.getImponibile() * this.aliquotaInps) / 100

    }


    getTassaIrpef() :number {
        

        return (this.getImponibile() - this.getTassaInps()) * this.aliquotaIrpef /100
    }


    getStipendioMensile() : number {

     return (this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef()))/12


    }


      

}

let avvocato = new Avvocato(85000, 67, 26, 15)
let av = avvocato.getStipendioMensile()
console.log('STIPENDIO MENSILE AVVOCATO :' + av + ' €');
