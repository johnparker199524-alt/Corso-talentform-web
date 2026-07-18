import React from 'react'
import { useState } from 'react'
const Usetate1 = () => {

    const [count, setCount] = useState<number>(0)



    return (
        <div style={{textAlign:'center'}}>
            <>
                <h1> Stato Conttatore : {count}</h1>
                <button onClick={() => setCount(count + 1)}>Cambia</button>
            </>
        </div>
    )
}

export default Usetate1