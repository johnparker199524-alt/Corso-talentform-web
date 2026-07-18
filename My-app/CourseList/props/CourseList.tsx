import React from 'react'

import { IcorsoList } from '../model/ICorsoList'
const CourseList: React.FC<IcorsoList> = ({ corso }) => {

    const getStato = (posti: number): string => {

        if (posti === 0) {
            return "Posti esauriti"
        } else {
            return "Posti Disponibili"

        }
    }

    return (
        <div>
            <header>
                <h1>Lista Dei Corsi </h1>
            </header>
            {
                corso.map((x) => (

       <ul>
            <li><h2>Corso : {x.titolo} </h2> </li>
            <li><h3> Posti : {getStato(x.postiLiberi)} </h3></li>
        </ul>
       ))
            }

        </div>
    )
}

export default CourseList