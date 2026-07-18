import React from 'react'
import PropsEmlpoyee from './props/PropsEmlpoyee'
import { IEmployee } from './model/IEmployee'
import employeejson from '../data/employee.json'
const Employee = () => {
const dipendenti :IEmployee[] = employeejson

  return (
    <div style={{textAlign:"center"}}>
        <PropsEmlpoyee  employee = {employeejson}/>
    </div>
  )
}

export default Employee