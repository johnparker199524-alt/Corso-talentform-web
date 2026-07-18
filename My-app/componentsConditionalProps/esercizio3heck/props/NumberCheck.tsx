import React from 'react'
import { INumber } from '../model/INumber'
const NumberCheck: React.FC<INumber> = (props) => {
    return (
        <div style={{fontFamily:'fantasy', textAlign:'center',backgroundColor:'yellow'}}>
            <h1> Check Component</h1>
            <p>Numero Entrato : {props.number}</p>
            <h2>Stato :
                {
                    props.number % 2 === 0 ? " Numero pari" :
                        " Numero dispari"
                }
            </h2>
        </div>
    )
}

export default NumberCheck