import React from 'react'
import { Link } from 'react-router-dom'

export const Gameover = (props)=>{

    return(
        <div>
            <div className="gover-main-container">
                <p className="gover-title">GAMEOVER</p>
                <Link className='gover-link' to='/main-game'><p className='gover-tt'>Try Again</p></Link>
                <Link className='gover-link' to='/'><p className='gover-tt'>Home</p></Link>
            </div>
        </div>
    )
}