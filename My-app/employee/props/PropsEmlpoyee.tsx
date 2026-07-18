import React from 'react'
import { IEmployeList } from '../model/IListEmployee'
const PropsEmlpoyee: React.FC<IEmployeList> = ({ employee }) => {
   
  const  getStato = (ore:number):string =>{

            if(ore >= 40){
               return "Full-Time"
            }else{
             return "Part-Time"
            }
  }
   
   
    return (
        <div>
            <header>
                <h1>Scrutino Finale</h1>
            </header>
            {employee.map((v) => (
                   
                   
                <ul>
                    
                    <li>
                         
                        Dipendente : {v.nome}
                    
                    </li>
                    <li key={v.id}>
                        oreSettimanali : {v.oreSettimanali} Stato :  {getStato(v.oreSettimanali)}

                    </li>

 
                </ul>


            ))
            }

        </div>
    )
}

export default PropsEmlpoyee