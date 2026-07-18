
import { IStudent } from './model/IStudent'

import studentData from '../data/student.json'
import PropsIfElse from "./props/PropsIfElse"
import { IStudentList } from "./model/IStudentList"
const Student = () => {

    
  
    const student: IStudent[] = studentData
            

  return (
    <div>
       < PropsIfElse  studenti={student}/>
    </div>
  )
}

export default Student