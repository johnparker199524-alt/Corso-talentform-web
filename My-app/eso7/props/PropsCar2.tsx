import React from 'react'
import { ICar2 } from '../model/ICar2'
const PropsCar2: React.FC<ICar2> = (props) => {
    return (
        <div>
            <header>
                <h1>Brand :{props.brand} </h1>
            </header>
            <main>
                <h2>Model : {props.model} </h2>
                <img src={props.picture} alt={props.model} />
               <hr />
                <h3>Color :{props.color} </h3>
                <p> Year : {props.year} </p>
            </main>
        </div>
    )

}

export default PropsCar2