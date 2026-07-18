import React from 'react'
import PropsGiocco from './props/PropsGiocco'
import { IGiocco } from '../model/IGiocco'

const GiocoCard = () => {

    const catalogo: IGiocco[] = [

        {

            titolo: "Cyberpunk 2077",
            piattaforma: "PC",
            voto: 9,
            disponibile: true,

        },
        {
            titolo: "Mario 7",
            piattaforma: "PS5",
            voto: 10,
            disponibile: true,
        },
        {
            titolo: "GTA VI",
            piattaforma: "Xbox Series X",
            voto: 8,
            disponibile: false,
        }
    ];

    return (
        <div className="app-container">
            <div className="">
                <header>
                    <h1>Stream Giocchi</h1>
                </header>

                <main>
                    <div>
                        {catalogo.map((giocco , index)=> (
                            <PropsGiocco
                                  key={index}
                                titolo={giocco.titolo}
                                piattaforma={giocco.piattaforma}
                                voto={giocco.voto}
                                disponibile={giocco.disponibile}
                            />)
                        )}
                    </div>

                </main>

            </div>
        </div>

    )
}

export default GiocoCard