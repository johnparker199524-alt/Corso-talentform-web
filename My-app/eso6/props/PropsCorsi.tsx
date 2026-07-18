import React from 'react'
import { ICorsi } from '../model/ICorsi'

const PropsCorsi : React.FC<ICorsi> = (props) => {
  return (
    <div>
        <>
        <ul style={{listStyle:'none' , fontFamily:'fantasy'}}>
            <li>Start : {props.start} </li>
            <li>Titolo : {props.title} </li>
            <li>Students : {props.students} </li>
            <li>Durata : {props.hours} </li>
          </ul>
        
        </>
    </div>
  )
}

export default PropsCorsi