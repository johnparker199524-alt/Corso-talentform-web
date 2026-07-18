import React from 'react'
  import { IStudent } from '../../model/IStudent'

const StudenteProps: React.FC<IStudent> = (props) => {
  return (
    <div>

        <>
           <ul className="st">
            <li> Ciao  {props.nome}</li>
            <li>Eta : {props.eta}</li>
           </ul>

        </>
    </div>
  )
}

export default StudenteProps