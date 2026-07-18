import React from 'react'
import { IProdotto } from '../model/IProdotto'
import ProdottoProps from './props/ProdottoProps'

const Prodotto = () => {

     let prodotti : IProdotto[] = [

{
    nome:'mike',
    colore:'blue',
    prezzo:700,
    disponibilita: true
},
{
    nome:'john',
    colore:'verde',
    prezzo:800,
    disponibilita: true
},
{
    nome:'Bridge',
    colore:'arancia',
    prezzo:200,
    disponibilita: false
},
{
    nome:'Link',
    colore:'blue',
    prezzo:500,
    disponibilita: true
}];

  return (




    <div style={{textAlign:'center', backgroundColor:'yellow'}}>
        <div>
            <header>
                <h1>Lista Dei Prodotti</h1>
            </header>

            <main>
                {
                    prodotti.map((valore, i)=>(

                    <ProdottoProps
                      key = {i}
                     nome = {valore.nome}
                     colore = {valore.colore}
                     prezzo = {valore.prezzo}
                     disponibilita = {valore.disponibilita}
                    
                    />

                    ))


                }
            </main>
        </div>
    </div>
  )
}

export default Prodotto