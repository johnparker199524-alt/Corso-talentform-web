import React from 'react'
import { ICorso } from './model/ICorso'
import corsojson from '../data/corso.json'
import CourseList from './props/CourseList'
const Corsi = () => {
    const corsi : ICorso[] = corsojson
  return (
    <div style={{textAlign: 'center'}}>
        <CourseList corso ={corsi}/>
    </div>
  )
}

export default Corsi