import React from 'react'
import { ICarList3 } from '../model/ICarList3'
const CarList3:React.FC<ICarList3> = ({auto3}) => {
  return (
    <div>
        <h1> Shop Auto John Parker </h1>
  
     {
        auto3.map((a)=>(
<>
          <h2><em>Auto {a.brand}</em> </h2>
          <ul>
            <li key={a.id}>Marca : {a.brand}</li>
            <li>Modello : {a.model}</li>
            <li> {a.electric?"Auto elettrica":
                "Auto tradizionale"}</li>
          </ul>
</>
        ))
     }

    </div>
  )
}

export default CarList3