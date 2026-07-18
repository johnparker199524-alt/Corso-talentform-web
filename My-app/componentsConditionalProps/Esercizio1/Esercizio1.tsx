import React from 'react'
import { IUser } from './model/IUser'
const Esercizio1:React.FC<IUser> = (props) => {
  return (
    <div>
         <h1>{props.online ?"Utente Online":"Utente Offline"}</h1>
    </div>
  )
}

export default Esercizio1
/*
Realizza un componente chiamato ProductStatus.
Il componente rappresenta lo stato di disponibilità di un prodotto in un negozio online.
Deve ricevere tramite props:
available: boolean
Il valore indica se il prodotto è presente in magazzino.
Il componente deve visualizzare:
•	se il prodotto è disponibile: 
Disponibile
•	se il prodotto non è disponibile: 
Non disponibile
Utilizzare un operatore ternario per effettuare il controllo.
*/