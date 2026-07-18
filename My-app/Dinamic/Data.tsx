//import React from 'react
import './Style.css'
const Data = () => {

    // variabile 
    const title = 'React In 2 Ore';
    const genere= 'Drama';
    const Anno = 2026;
    const regista = 'Fabio';
    // corpo
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , fontFamily:'fantasy', marginTop:50}}>
                   <header>
                           <h1>{title}</h1> 
                  </header>
                  <main style={{color: 'green'}}>
                       <p className='pd'> Titolo        : {title}</p>
                       <p> Categoria     : {genere}</p>
                       <p>Anno Di Uscita : {Anno}</p>
                       <p>Regista E ProD : {regista}</p>
                  </main>
            </div>

        </div>
    )
}

export default Data


