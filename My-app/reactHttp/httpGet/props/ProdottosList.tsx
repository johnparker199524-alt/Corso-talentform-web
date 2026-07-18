import React from 'react'
import { IListProdottos } from '../model/IListProdottos'
const ProdottosList: React.FC<IListProdottos> = ({ prodotti }) => {
    return (
        <div>
            <h1>Shop Product</h1>
            <>
                {
                    prodotti.map((p) => (
                        <div key={p.brand} style={{
                            backgroundColor: 'yellowgreen', textAlign: 'center'
                            , fontFamily: 'math', marginLeft: '300px', marginRight: '300px', borderRadius: '15px'
                        }}>
                            <ul style={{ listStyleType: 'none', padding: '10' }} >
                                <li style={{ color: 'orangered' }}><em>{p.brand}</em></li>
                                <li><img style={{ borderRadius: '15px' }} src={p.picture} alt={p.model} height={150} width={200} /></li>
                                <li>Model : {p.model}</li>
                                <li>Color : {p.color}</li>
                                <li>price : {p.price}.00 €</li>
                                <li style={{ color: p.dispo ? "green" : "red" }}>In Negozio : {
                                    p.dispo ? "Disponibile" :
                                        "Esaurito"

                                }

                                </li>
                            </ul>

                        </div>


                    )) // end map

                }
            </>

        </div>
    )
}

export default ProdottosList