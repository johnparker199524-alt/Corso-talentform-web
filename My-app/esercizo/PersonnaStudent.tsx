import React from 'react'
import { IStudent } from '../model/IStudent'
import StudenteProps from './props/StudenteProps'

const PersonnaStudent = () => {

    let student: IStudent[] = [
        {
            nome: 'John',
            eta: 25
        },
        {
            nome: 'Mario',
            eta: 27
        },
        {
            nome: 'Mike',
            eta: 29
        }
    ];
    return (
        <div>
            <div>
                <header>
                    <h1>Student list</h1>
                </header>
                <main>
                    {
                        student.map(
                           ( valore )=> (

                                <StudenteProps
                                    nome={valore.nome}
                                    eta={valore.eta}
                                />)

                        )}


                </main>
            </div>
        </div>
    )
}

export default PersonnaStudent