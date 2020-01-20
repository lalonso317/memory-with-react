import React, {useState, useEffect} from 'react'
import { deck } from '../values'

export default function MainGame() {
    const [values, setValues] = useState(deck)
    const [attempts, setAttempts] = useState(20)
    const [firstValue, setFirstValue] =useState([])
    const [secondValue, setSecondValue] = useState([])
    const [newArray, setNewArray] = useState([])
    const [matched, setMatch] = useState([])

    const [flip, setFlip] = useState()
    const [flipTwo, setFlipTwo] = useState()

    const [stay, setStay] = useState()

   
    const shuffle = (values) =>{
        let currentIndex = values.length
        let temporaryValue
        let randomIndex
        const newArray = values.slice()
        // While there remains elements to shuffle...
        while (currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          // Swap it with the current element.
          temporaryValue = newArray[currentIndex]
          newArray[currentIndex] = newArray[randomIndex]
          newArray[randomIndex] = temporaryValue
        }
        console.log(newArray)
        return setValues(newArray)
      }
      const handleShuffle = () =>{
        shuffle(values)
      }
      const Class = (e) => {
        if(flip === e){
            return 'facematch card'
        }else if(flipTwo === e || flip === e){
            return 'facematchTwo card'
        }else{
            return 'backmatch card'
        }
      }
     
      const Timeout = ({value}) =>{
      setTimeout(() =>{
        handleFlip({value})
    }, 500)
}
      const handleFlip = ({value}) =>{
          newArray.push(value)
          console.log(newArray, value)
          
          if(newArray[1] === value){
            setFlipTwo(newArray[1].number)
            secondValue.push(newArray[1])
            console.log(secondValue)
            setTimeout(() =>{
            CheckPairs()
            },700)
       
          }else if(newArray[0] === value){
            setFlip(newArray[0].number)
            firstValue.push(...newArray)
            console.log(firstValue)
          } 
      }
    
      const CheckPairs = () =>{
        if(firstValue[0].value !== secondValue[0].value){
            setNewArray([])
            setFirstValue([])
            setSecondValue([])
            setFlip([])
            setFlipTwo([])
          }else{
            matched.push(...firstValue)
            matched.push(...secondValue)
            setFlip([])
            setFlipTwo([])
            setNewArray([])
            setFirstValue([])
            setSecondValue([])
            console.log(matched)
            

          }
      }

    //   const checkClass = (e) =>{
    //     if(matched.number === e){
    //         return `stay ${Class(e)}`
    //     }
    //     else if(!matched.includes(e)){
    //         return `${Class(e)}`
    //   }
    // }
    const Id = (e)=>{
        console.log('stay', stay)
    }
    //   matched.includes(e) ? `stay${Class(e.number)}`: '' ? Class(e.number) 
    
    return (
        <div>
            <button onClick={handleShuffle}>Shuffle</button>
            <div className="card-container">
                {values.map((e,i) => (
                    <div   id="individual-card" className="wholecard" key={i}>
                    <span onClick={() => {Timeout({value:e}); Id(e.value)}} id={Id()} className={Class(e.number)}></span>
                    <span ><p>{e.value}</p></span>
                    </div>
                ))}
            </div>
        </div>
    )
}
// !flip ? "back card" : "front card"
// flip ? 'back-single-card stay backmatch' : 'face-single-card stay facematch' 