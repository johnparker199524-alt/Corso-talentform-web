import React from 'react'
import { IHotel2 } from '../model/IHotel2'
const PropsHotel2: React.FC<IHotel2> = (props) => {
    return (
        <div>
            <div>
                <img src={props.picture} alt={props.nome} />
            </div>
            <>
                <ul style={{ listStyle: 'none', fontFamily: 'fantasy' }}>

                    <li>{props.nome}</li>

                    <li>{props.room_type}</li>

                    <li>{props.price_room_day}.00 €</li>

                    <li>{props.room_type}</li>

                    <li>{props.room_available}</li>
                </ul>

            </>
        </div>
    )
}

export default PropsHotel2