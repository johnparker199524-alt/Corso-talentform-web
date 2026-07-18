import React from 'react'
import { IAvailable } from '../model/IAvailable'
const ProductStatus:React.FC<IAvailable> = (props) => {
    return (
        <div>
            <h1> SHOP </h1>
            <h2>Stato : {props.available?"Disponibile":
                "Esaurito"}</h2>
            </div>
    )
}

export default ProductStatus