import React from 'react'
import PropsListAuto from './props/PropsListAuto'
import arrJson from '../data/auto.json'

const Auto = () => {

    const vehicoli = arrJson;
  return (
    <div style={{textAlign:'center'}}>
    < PropsListAuto array={vehicoli}/>
    </div>
  )
}

export default Auto