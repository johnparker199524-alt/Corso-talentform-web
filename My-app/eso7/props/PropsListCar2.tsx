import React from 'react'
import PropsCar2 from './PropsCar2'
import { ICar2 } from '../model/ICar2'
// custom type
type items = ICar2[]
const PropsListCar2: React.FC<{ json: items }> = (props) => {
    return (
        <div>
            {
                props.json.map((valore) => (

                    <PropsCar2
                        key={valore.id}
                        brand={valore.brand}
                        color={valore.color}
                        picture={valore.picture}
                        model={valore.model}
                        year={valore.year}

                    />


                ))
            }


        </div>
    )
}

export default PropsListCar2