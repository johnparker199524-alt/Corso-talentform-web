import React from 'react'
import { IAuto } from '../model/IAuto'
const PropsAuto : React.FC<IAuto> = (props) => {
  return (
    <div style={{backgroundColor: 'blue', fontFamily:'fantasy'}}>
        <header>
            <h1>Brand : {props.brand } </h1>
        </header>
        <main>
            <h2>Model : {props.model}</h2>
            <hr />
            <h3>Color : {props.color} </h3>
            <p>Year : {props.year}</p>
            <hr />
            <img src={props.picture} alt={props.model} />
        </main>
    </div>
  )
}

export default PropsAuto