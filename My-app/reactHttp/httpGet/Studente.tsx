import React, { useState, useEffect } from 'react'
import { IStudent } from './model/IStudent'
import StudentLList from './props/StudentLList'
import axios from 'axios'

const Studente = () => {

    const [student, setStudent] = useState<IStudent[]>([])

    React.useEffect(() => {

        axios.get("https://mocki.io/v1/a766873c-55cd-4834-b981-d1035742ee38")
            .then((response) => {

                const dataStudent = response.data.map((s: IStudent) => {

                    return {
                        id: s.id,
                        name: s.name,
                        class: s.class,
                        eta: s.eta,
                        bravo: s.bravo

                    }

                })

                setStudent(dataStudent)

            })








    },[])


    return (
        <div style={{backgroundColor:'orangered', textAlign:'center'}}>
            <StudentLList studente={student}/>
        </div>
    )
}

export default Studente