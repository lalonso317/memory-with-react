import React from 'react'
import { Link } from 'react-router-dom'

export const Gameover = ()=>{

    return(
        <div>
            <h1>GAMEOVER</h1>
            <Link to='/main-game'><p>Try Again</p></Link>
            <Link to='/'>Home</Link>
        </div>
    )
}