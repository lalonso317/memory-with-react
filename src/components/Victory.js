import React, { useState } from 'react'
import ZUCC from '../Assests/Zucc.mp3'
import { Link } from 'react-router-dom'


export const Victory = () =>{
    const [r, setR] = useState()
    const [g, setG] = useState()
    const [b, setB] = useState()

    setInterval(() =>{
        setR(Math.floor(Math.random()*256))
        setG(Math.floor(Math.random()*256))
        setB(Math.floor(Math.random()*256))
    }, 1000)

    return(
        <div className="victory-main-container" style={{background:`rgb(${r},${b},${g})`}}>
            <p className="victory-title">You Win!</p>
            <Link className='gover-link' to='/main-game'><p className='victory-tt'>Play Again</p></Link>
            <Link className='gover-link' to='/'><p className='victory-tt'>Home</p></Link>
            <audio src={ZUCC} controls autoPlay />
        </div>
    )
}