import React, { useState } from 'react'

const TermsCheckbox = () => {

    const [stato, setStato] = useState<boolean>(false)

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Termini e condizioni di un servizio</h1>
            <>
                <label id="box">Accetto i termini e condizioni
                    <input type="checkbox"
                        checked={stato}
                        onChange={(e) => setStato(e.target.checked)}

                    />
                </label>
                <h2>Stato :  {stato ? "checked" :
                    "unchecked"}
                </h2>
            </>
        </div>
    )
}

export default TermsCheckbox