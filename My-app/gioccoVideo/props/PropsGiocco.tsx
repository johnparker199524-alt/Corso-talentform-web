import React from 'react'
import { IGiocco } from '../../model/IGiocco'
import '../Giocco.css'

const PropsGiocco: React.FC<IGiocco> = (props) => {
    let stato: string;
    let style: string;
    if (props.disponibile) {
        stato = "Disponibile subito!";
        style = 'disponibile';
    } else {
        stato = "Esaurito";
        style = "esaurito";
    }
    return (
        <div className='gioco-card'>
            <>
                <ul className="noStyle">

                    <li className ="gioco-titolo">Titolo:   {props.titolo}</li>
                    <li className ="gioco-piattaforma">Piattaforma:   {props.piattaforma} </li>
                    <li className ="gioco-voto">Voto:   {props.voto}</li>
                    <li className ={style}>Stato:   {stato}</li>
                </ul>
            </>
        </div>
    )
}

export default PropsGiocco