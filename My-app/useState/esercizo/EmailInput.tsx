import React, { useState } from 'react'

const EmailInput = () => {
const [email, setEmail] = useState<string>("")
  return (
    <div>
        <>
          <h1>Email : {email}</h1>
          <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        </>
    </div>
  )
}

export default EmailInput