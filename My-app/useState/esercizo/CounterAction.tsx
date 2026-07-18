import React from 'react'
import { useState } from 'react'
const CounterAction = () => {

    const [countUp, setCountUp] = useState<number>(10)
    const [countDown, setCountDown] = useState<number>(10)

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Contatore {countUp}</h1>
            <h1>Contatore {countDown}</h1>
            <>
                <button onClick={() => setCountUp(countUp + 1)}>Incrementa  </button>
                <button style={{ marginLeft: 10 }} onClick={() => setCountDown(countDown - 1)}>Decrementa </button>
            </>
        </div>
    )
}

export default CounterAction