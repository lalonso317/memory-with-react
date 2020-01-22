import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export const Landing = () =>{
    const [redirect, setRedirect] = useState(false)

    const handleRedirect = () =>{
        setTimeout(() =>{
        setRedirect(!redirect)
        },1000)
        
    }

    return(
        <div>
            <div className="landing-main-container">
                <h1 className="landing-title">
                    My Memory Game
                </h1>
                <p className="landing-button" onClick={handleRedirect}>
                    {redirect ?  (<Redirect to='/main-game'/>):('') }
                    Click to play!
                </p>
            </div>
        </div>
    )
}