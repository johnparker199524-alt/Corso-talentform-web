import React, { Fragment } from 'react'
import { IUserList2 } from '../model/IUserList2'
const UserList2: React.FC<IUserList2> = ({ persona }) => {


  return (
    <div style={{ padding:'50px',backgroundColor: 'blue',fontFamily:'math', textAlign:'center'  }}>
      <h1>Registro Civico</h1>
      <>
        <Fragment >
          {
            persona.map((p) => (
              

                <div key={p.id} style={{ backgroundColor: 'grey',marginLeft:'300px',marginRight:'300px',borderRadius:'15px'}}>
                  <h3><em>Cittadino</em></h3>
                  <h3>Nome : {p.nome}</h3>
                  <h3>Cognome : {p.cognome}</h3>
                  <h3>Eta : {p.eta}</h3>
                  <h3>Citta : {p.citta}</h3>
                  <h3>Nazione : {p.nazione}</h3>
                  <p>Created By <em style={{ color: 'green' }}>John@Moise</em></p>
                </div>
            

            ))



          }
        </Fragment>
      </>
    </div>
  )
}

export default UserList2