//import React from 'react'
import google from "../assets/google.webp"
import pc from "../assets/pc.webp"
const
    Image = () => {
        return (
            <div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <h2 style={{
                        color: "red", backgroundColor: "yellow", textAlign: 'center',
                        marginLeft: 100, marginRight: 100
                    }}>Google Pixel 12</h2>
                    <img src={google} height={300} alt="google" />
                    <h2 style={{
                        color: "red", backgroundColor: "yellow", textAlign: 'center',
                        marginLeft: 100, marginRight: 100
                    }}>Laptop Azus</h2>
                    <img src={pc} height={300} alt="samsung" />
                </div>

            </div>
        )
    }

export default Image 
