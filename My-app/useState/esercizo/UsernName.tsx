import React, { useState } from 'react'

const UsernName = () => {
   const  [nome ,setNome] = useState<string>("Moise")
    return (
        <div><>

             <h1>Nome : {nome}</h1>
             <input type="text" 
               value={nome}
               onChange={(e)=>setNome(e.target.value)}
             />
                 
        </>
        </div>
    )
}

export default UsernName