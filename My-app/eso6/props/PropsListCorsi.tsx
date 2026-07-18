import React from 'react'
import PropsCorsi from './PropsCorsi'
import { ICorsi } from '../model/ICorsi'

 // custom type
 type items = ICorsi[]
const PropsListCorsi : React.FC<{array:items}>= (props) => {

   

  return (
    <div>
        {
            props.array.map((valore)=>(

                 <PropsCorsi
            key={valore.id + valore.title}
            start = {valore.start}
            title = {valore.title}
            students= {valore.students}
            hours= {valore.hours}


        /> )
        ) //map end
        }
       
    </div>
  )
}

export default PropsListCorsi