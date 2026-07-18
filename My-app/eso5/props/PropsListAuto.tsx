import React from 'react'
import PropsAuto from './PropsAuto'
import { IAuto } from '../model/IAuto'
// custom type

type items = IAuto[]
const PropsListAuto : React.FC<{array:items}>= (props) => {
  return (
    <div>
        {
            props.array.map((valore)=>(

            <PropsAuto
             key={valore.id}
            brand={valore.brand}
            model={valore.model}
            color = {valore.color}
            year = {valore.year}
            picture ={valore.picture}
            
            
                />

            ))
        }
       

    </div>
  )
}

export default PropsListAuto