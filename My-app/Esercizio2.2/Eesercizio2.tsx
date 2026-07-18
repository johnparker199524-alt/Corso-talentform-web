import React from 'react'
import { measureMemory } from 'vm'

const Eesercizio2 = () => {

    const disponibile: boolean = true
    const acceso:boolean = true
    const  messagio:boolean =true
    const admin:boolean =true


    return (
        <div>
            <h1> {disponibile ? "Prodotto disponibile" :
                "Prodotto non disponibile"}</h1>
                <h2>{acceso? "Login Effettuato":"Effettua login"}</h2>
                <h3>{messagio? "Bentornato":""}</h3>
                {
                    messagio && <p>connesso: 'boolean &&'' si usa solo se ce una sola 
                                 condizione
                    </p>
                }
                {
                    admin && <h4>Elimina Utente</h4>
                }
        </div>
    )
}

export default Eesercizio2