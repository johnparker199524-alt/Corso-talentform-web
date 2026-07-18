import React from 'react'
import PropsListCorsi from './props/PropsListCorsi'
import '../Dinamic/Style.css'
const Corso = () => {
    // creo l'array
    const corsi = [
        {
            start: '25/03/2026',
            title: 'Svillupatore Front-End',
            students: 15,
            hours: 250
        },
        {
            start: '25/07/2026',
            title: 'Svillupatore Full-Stack',
            students: 15,
            hours: 450
        },
        {
            start: '25/10/2026',
            title: 'Svillupatore Back-End',
            students: 15,
            hours: 250
        },
        {
            start: '25/11/2026',
            title: 'Svillupatore Mobile',
            students: 15,
            hours: 250
        },
        {
            start: '25/09/2026',
            title: 'Sistemista Informatica',
            students: 15,
            hours: 350
        }


    ];

    return (

        <div style={{textAlign: "center"}}>
            <header>
                <h1> Corso Di Web Dev Pro</h1>
            </header>
            < PropsListCorsi
              
              array = {corsi}
            />
        </div>
    )
}

export default Corso