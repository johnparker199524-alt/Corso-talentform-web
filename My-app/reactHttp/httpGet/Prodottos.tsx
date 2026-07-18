import React, { useEffect, useState } from 'react'
import { IProdottos } from './model/IProdottos'
import ProdottosList from './props/ProdottosList'
import axios from 'axios'

const Prodottos = () => {

    const [prodotto, setProdotto] = useState<IProdottos[]>([])
    // function useEffect() che ritorn un axio

    React.useEffect(() => {

        axios.get("https://mocki.io/v1/ee6059cb-e7d4-4179-9ed5-ab9e1b474df6")
            .then((response) => {

                const dataProdotti = response.data.map((prod: IProdottos) => {

                    return {

                        brand: prod.brand,
                        picture: prod.picture,
                        model: prod.model,
                        color: prod.color,
                        price: prod.price,
                        dispo: prod.dispo

                    }

                })

        setProdotto(dataProdotti)

            }) 

    }, [])




    return (
        <div style={{backgroundColor:'deepskyblue', textAlign:'center'}}>
            <ProdottosList prodotti={prodotto} />
        </div>
    )
}

export default Prodottos