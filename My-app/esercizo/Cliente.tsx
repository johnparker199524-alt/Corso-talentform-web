import React from 'react'
import ClienteProps from './props/ClienteProps'
import { ICliente } from '../model/ICliente'


const Cliente = () => {
let clienti: ICliente[] = [

    {
        nome : 'Marco',
        cognome: 'Pizza',
        citta : 'Roma'
    },
    {
        nome : 'Mike',
        cognome: 'Vicenzo',
        citta : 'Milano'
    },
    {
        nome : 'Reacher',
        cognome: 'Roben',
        citta : 'Napoli'
    }
];

  return (
    <div style={{backgroundColor: 'green' , fontFamily:'fantasy'}}>
        <div style={{textAlign:'center'}}>
            <header>
                <h1>Lista Dei Clienti</h1>
            </header>
            <main>
                {
                    clienti.map(
                (cliente, i) => (

                    <ClienteProps
                    key={i}
                    nome = {cliente.nome}
                    cognome ={cliente.cognome}
                    citta = {cliente.citta}
                    
                    /> )

                    )}
            </main>
        </div>
    </div>
  )
}

export default Cliente