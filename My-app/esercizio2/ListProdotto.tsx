import React from 'react'
import { IProdotto } from './model/IProdotto'
import PropsProdotto from './model/props/PropsProdotto';

type items2 = IProdotto[];
const ListProdotto: React.FC<{ array: items2 }> = (props) => {
    return (
        <div>
            <PropsProdotto

                nome={props.array[0].nome}
                colore={props.array[0].colore}
                prezzo={props.array[0].prezzo}
                disponibilita={props.array[0].disponibilita}


            />
            <PropsProdotto

                nome={props.array[1].nome}
                colore={props.array[1].colore}
                prezzo={props.array[1].prezzo}
                disponibilita={props.array[1].disponibilita}


            />
            <PropsProdotto

                nome={props.array[2].nome}
                colore={props.array[2].colore}
                prezzo={props.array[2].prezzo}
                disponibilita={props.array[2].disponibilita}


            />
            <PropsProdotto

                nome={props.array[3].nome}
                colore={props.array[3].colore}
                prezzo={props.array[3].prezzo}
                disponibilita={props.array[3].disponibilita}


            />

        </div>
    )
}

export default ListProdotto