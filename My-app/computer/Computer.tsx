import React from 'react'
import { IComputer } from './model/IComputer'
import ComputerProps from './props/ComputerProps'
import pcjson from '../data/computer.json'
const Computer = () => {
    const pc:IComputer[]=pcjson
  return (
    <div style={{textAlign:'center'}}>
        <ComputerProps computer={pc} />
    </div>
  )
}

export default Computer