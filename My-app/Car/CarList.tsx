import React from 'react'
import { ICar3 } from './model/ICar3'
import CarList3 from './props/CarList3'
import carjson from'../data/car.json'
const CarList = () => {
    const car:ICar3[] = carjson
  return (
    <div style={{fontFamily:'fantasy',textAlign:'center', backgroundColor:'green'}}>
    <CarList3 auto3 ={car} />
    </div>
  )
}

export default CarList