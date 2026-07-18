import React from 'react'
import { IProdotto } from '../../../model/IProdotto'
const PropsProdotto :React.FC<IProdotto>= (props) => {
  return (
    <div>
        <div>
            <ul style={{listStyleType:'none'}}>
                <li>nome: {props.nome}</li>
                <li>colore: {props.colore}</li>
                <li>prezzo: {props.prezzo}.00€</li>
                <li>disponibilita: {props.disponibilita.toString()}</li>
               
            </ul>
        </div>
    </div>
  )
}

export default PropsProdotto