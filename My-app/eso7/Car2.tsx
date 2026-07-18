import React from 'react'
import PropsListCar2 from './props/PropsListCar2'
import jsonAuto from '../data/auto.json'
import { ICar2 } from './model/ICar2'

const Car2 = () => {
      
    const vehicoli:ICar2[] = jsonAuto

  return (
    <div style={{textAlign:'center'}}>
        <PropsListCar2  json ={vehicoli } />
    </div>
  )
}

export default Car2