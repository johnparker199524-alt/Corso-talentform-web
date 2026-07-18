import React from 'react'
import { ICliente } from '../../model/ICliente'
const ClienteProps: React.FC<ICliente> = (props) => {
  return (
    <div>
        <>
          <ul style={{listStyleType: 'none' , color:'grey'}}>
            <li>nome : {props.nome}</li>
            <li>cognome : {props.cognome} </li>
            <li>Citta : {props.citta} </li>
          </ul>
        
        </>
    </div>
  )
}

export default ClienteProps