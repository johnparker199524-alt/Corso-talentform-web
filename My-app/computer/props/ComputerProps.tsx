import React from 'react'
import { IComputerList } from '../model/IComputerList'
const ComputerProps: React.FC<IComputerList> = ({ computer }) => {
    return (
        <div>
            <h1>Shop Computer </h1>

            {

                computer.map((c) => (
                    <ul>
                        <li key={c.id}>Brand : {c.brand}</li>
                        <li>Capacita : {c.ram} Go</li>
                        <li>Prezzo :  {c.price}</li>
                        <li>{c.ram>=16?"Prestazioni elevate ":
                            "Prestazioni standard"}</li>
                    </ul>
                ))

            }

        </div>
    )
}

export default ComputerProps