import React from 'react'
// import PropsProdotto from './model/props/PropsProdotto'
import ListProdotto from './ListProdotto';

const Prodotto = () => {

    const prodotti = [
        {
            nome: "Google Pixel 18",
            colore: "verde",
            prezzo: 200,
            disponibilita: false
        },
        {
            nome: "Iphone 20",
            colore: "rosso",
            prezzo: 700,
            disponibilita: true
        },
        {
            nome: "Iphone 19",
            colore: "giallo",
            prezzo: 200,
            disponibilita: true
        },
        {
            nome: "Iphone 17",
            colore: "nero",
            prezzo: 500,
            disponibilita: false
        },

    ];




    return (
        <div style={{backgroundColor:'yellow'}}>
            <div style={{textAlign:'center'}}>
                <ListProdotto array={prodotti} />
            </div>
        </div>
    )
}

export default Prodotto