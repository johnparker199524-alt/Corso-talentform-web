import React from 'react'
import { IStudentList } from '../model/IStudentList'
const StudentLList: React.FC<IStudentList> = ({ studente }) => {

    return (
        <div>
            <h1>Studenti </h1>
            <>
                {
                    studente.map((s) => (
                        <div key={s.id} style={{
                            backgroundColor: 'yellowgreen', textAlign: 'center'
                            , fontFamily: 'math', marginLeft: '300px', marginRight: '300px', borderRadius: '15px'
                        }}>
                            <ul style={{ listStyleType: 'none', padding: '10px' }} >
                                <li>Name: {s.name}</li>
                                <li>Eta: {s.eta}</li>
                                <li>Class: {s.class}</li>
                                <li style={{ color: s.bravo ? "green" : "yellow" }}>
                                    {s.bravo ? "Borsa Di Studio" : "amesso"}
                                </li>
                            </ul>




                        </div>

                    ))
                }

            </>
        </div>
    )
}

export default StudentLList