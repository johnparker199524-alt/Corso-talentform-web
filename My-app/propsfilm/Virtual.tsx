import React from 'react'

const Virtual:React.FC<{
     name:string ;
     prezzo: number;
     luogo:string;
}> = (props) => {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , fontFamily:'fantasy', marginTop:50}}>
            <header>
                <h1 style={{color: 'blue'}}> Lista Ordine</h1>
            </header>
            <ul>
                <li>Nome Prodotto    : {props.name}</li>
                <li> Prezzo prodotto : {props.prezzo} €</li>
                <li> Destinazione    : {props.luogo}</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Virtual