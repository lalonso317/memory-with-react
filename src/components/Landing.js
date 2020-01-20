import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export const Landing = () =>{
    const [redirect, setRedirect] = useState(false)

    const handleRedirect = () =>{
        setRedirect(!redirect)
    }

    return(
        <div>
            <h1>
                Hello World
            </h1>
            <button onClick={handleRedirect}>
                {redirect ?  (<Redirect to='/main-game'/>):('') }
                Click to play!
            </button>
        </div>
    )
}