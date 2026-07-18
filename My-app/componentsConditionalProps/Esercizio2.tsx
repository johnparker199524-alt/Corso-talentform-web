import React from 'react'
import { IAge } from './Esercizio1/model/IAge'
const Esercizio2: React.FC<IAge> = (props) => {
    return (
        <div>
            <h1>Stato Civico</h1>
            <h2>Eta: {props.eta} Anni</h2>
            <h3>{props.eta >= 18 ?
                "Puoi Fare la patente sei Maggiore " :
                "Mi Dispiacce Sei Minorenne"} </h3>
        </div>
    )
}

export default Esercizio2