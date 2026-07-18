import React, { useState, useEffect } from 'react'
import UserList2 from './props/UserList2'
import { IUsers2 } from './model/IUser2'
import axios from 'axios'

const User2 = () => {
  const [user, setUser] = useState<IUsers2[]>([])

  React.useEffect(() => {
    axios.get('https://mocki.io/v1/b69cad4d-15db-4caa-8069-7b7f2011bc6e')
      .then((response) => {
        const dataPerson = response.data.map((user: IUsers2) => {
          return {
            id: user.id,
            nome: user.nome,
            cognome: user.cognome,
            eta: user.eta,
            citta: user.citta,
            nazione: user.nazione   
          }
        })
        
        setUser(dataPerson)
      })
    //   .catch((error) => {
    //     console.error("Errore durante la chiamata API:", error)
    //   })
  }, []) // <-- QUESTE PARENTESI MANCAVANO! Dicono a React di fare la chiamata una sola volta.

  return (
    <div style={{ backgroundColor: 'yellowgreen' }}>
        <UserList2 persona={user} />
    </div>
  )
}

export default User2