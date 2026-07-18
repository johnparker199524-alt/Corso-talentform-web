import React, { useState } from 'react'

const ColorChange = () => {
    const [color, setColor] = useState<string>('black')
  return (
    <div style={{textAlign:'center'}}>
        <>
            <h1 style={{color:color}}>Colore : {color}</h1>
            <p style={{color:color}}>Il testo è : {color}</p>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
        </>
    </div>
  )
}

export default ColorChange