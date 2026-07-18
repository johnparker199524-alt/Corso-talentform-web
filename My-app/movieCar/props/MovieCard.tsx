import React from 'react'
import { IMovList } from '../model/IMoCust'
const MovieCard: React.FC<IMovList> = ({ movie }) => {
    return (
        <div>
            <>
                <h1>Galleria John </h1>

                {
                    movie.map((m) => (

                        <>
                            <h2>
                                <em>Titolo : {m.title}</em>
                            </h2>

                            <img src={m.image} alt={m.title} height={150}/>

                            <h3>Genere : {m.type}</h3>
                            <p>Data Uscita : {m.release} </p>

                            <em>{m.release >= 2020 ? "Film recente" : "Film classico"}</em>

                            <h3>Stato : <em>{m.available ? "Disponibile" : "Non disponibile"}</em></h3>
                        </>
                    ))

                }

            </>
        </div>
    )
}

export default MovieCard