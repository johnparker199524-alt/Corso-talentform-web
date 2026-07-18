import React from 'react'
import { IProdotto } from '../../model/IProdotto'
const ProdottoProps:React.FC<IProdotto> = (props) => {
  return (
    <div>
        <>
          <ul style={{listStyleType: 'none' , color:'grey'}}>
            <li>{props.nome}</li>
            <li>{props.colore}</li>
            <li>{props.prezzo}.00€</li>
            <li>{props.disponibilita.toString()}</li>
          
          </ul>
        
        </>
    </div>
  )
}

export default ProdottoProps