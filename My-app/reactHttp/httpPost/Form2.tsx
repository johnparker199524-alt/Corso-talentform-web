import React, { useEffect,useState } from 'react'
import { IForm } from './model/IForm'
import axios from 'axios'

const Form2:React.FC = () => {

const [nome,setNome] = useState<string>('')
const [email,setEmail]= useState<string>('')
const [invia, setInvia] = useState<IForm | null>(null)

const handlesend =()=>{
      const dati:IForm = {nome:nome,email:email}
    axios
         .post("https://corso-react-8a9f7-default-rtdb.firebaseio.com/form.json"
            , dati )
         .then(()=>{
            setInvia(dati)
         })

}

 



    return (
        <div>
            <label htmlFor="nome">Nome :</label>
            <input id="nome" type="text"
                    value={nome }
                   onChange={(e)=>setNome(e.target.value)} />
            <label htmlFor="email">Email</label>
            {"   "}
            <input type="email" id="eamil"
                   value={ email} 
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <button onClick={handlesend }>invia</button>
        </div>
    )
}

export default Form2