import React, {useState, useEffect} from 'react'
import { deck } from '../values'
import { Link, Redirect } from 'react-router-dom'
import Timer from 'react-compound-timer'

export const  MainGame =()=> {

    // Setting the the states for the variables used in the compoenent
    const [values, setValues] = useState(deck)
    const [attempts, setAttempts] = useState(20)
    const [firstValue, setFirstValue] =useState([])
    const [secondValue, setSecondValue] = useState([])
    const [newArray, setNewArray] = useState([])
    const [matched, setMatch] = useState([])

    const [flip, setFlip] = useState()
    const [flipTwo, setFlipTwo] = useState()

    const [seconds, setSeconds] =useState(0)
    const [minutes, setMinutes] = useState(0)

    
   // Handles the shuffle of the deck in the values.js
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

      //currently has a button to shuffle the cards if needed
      useEffect(() => {
        shuffle(values)

      },[])
      
   
      // this sets the class for the cards which is set on a onClick function, it passes the card.number => 
      // the flip and flipTwo are set as the values in the newArray use later on 
      const Class = (e) => {
        if(flip === e){
            return 'facematch card'
        }else if(flipTwo === e || flip === e){
            return 'facematchTwo card'
        }else{
            return 'backmatch card'
        }
      }
     
      // A Timeout function for the function of handleFlip, this is on a onClick funciton as well,
      // given the checks passed in the handleFlip function it is set for half a second
      const Timeout = ({value}) =>{

      setTimeout(() =>{
        handleFlip({value})
    }, 500)
}
    // This function sets the states for the two cards that are being compared,
    // when both values are set it runs the CheckPairs function
      const handleFlip = ({value}) =>{
          newArray.push(value)
          
          if(newArray[1] === value){
            setFlipTwo(newArray[1].number)
            secondValue.push(newArray[1])
            setTimeout(() =>{
            CheckPairs()
            },600)
       
          }else if(newArray[0] === value){
            setFlip(newArray[0].number)
            firstValue.push(...newArray)
          } 
      }
    // this function checks if the pairs are equal if they are it is then pushed into a new Matched Array, 
    // and then then states are set back to the inital state
      const CheckPairs = () =>{
        if(firstValue[0].value !== secondValue[0].value){
            setAttempts(attempts-1)
            setNewArray([])
            setFirstValue([])
            setSecondValue([])
            setFlip([])
            setFlipTwo([])
          }else{
            matched.push(...firstValue)
            setFirstValue([])
            matched.push(...secondValue)
            setSecondValue([])
            console.log(matched)
            setFlip([])
            setFlipTwo([])
            setNewArray([])
            
            
          }
      }

      
    // var interval = setInterval( function time(){
    //     $("#seconds").html(pad(++sec%60));
    //     $("#minutes").html(pad(parseInt(sec/60,10)))
    //     return ;
    // }, 1000);
        // var sec = 0

        // var  pad = ( val )  => { return val > 9 ? val : "0" + val ;}
        // setInterval(()=>{
        //     const secs =pad(++sec%60)
        //     const mins = pad(parseInt(sec/60,10))
        //     return secs, mins
        // },1000)
    
    

    // If the cards match they get pushed into a array for checking if the equal the value
    // It then adds an ID for them to stay flipped
    let unique =[]
    const match = matched.forEach(m => unique.push({val:m.value}))
    const mach = unique.map(e => e.val)
    
   
    return (
        <div>
            <div className="game-main-container">
                {attempts === 0 ? (<Redirect to='/gameover'/>) : ('')}
                {matched.length === values.length ? (<Redirect to='/victory'/>) : ('') }
                <div className="game-header">
                <Link style={{textDecoration: 'none', color:'white'}}to='/'> <p className="game-home">Home</p></Link>
                    <div className="game-attempts">{attempts}</div>
                    <div className="game-clock">
                    <Timer>
                        <Timer.Minutes />:
                        <Timer.Seconds /> 
                    </Timer>
                    </div>
                </div>
                <div className="card-container">
                    {values.map((e,i) => (
                        <div id="individual-card" className="wholecard" id={mach.includes(e.value) ? 'stay' : ''} key={i}>
                        <span onClick={() => Timeout({value:e})} className={Class(e.number) }></span>
                        <span ><p className="card-values">{e.value}</p></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
