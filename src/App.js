import React, { useEffect, useState } from 'react'

const App = () => {
  const [userChoice, setUserChoice]=useState('rock')
  const [computerChoice, setComputerChoice]=useState('rock')
  const [userPoints, setuserPoints]=useState(0)
  const [computerPoints, setComputerPoints]=useState(0)
  const [turnResult, setTurnResult]= useState(null)
  const [result, setResult]=useState("let's see who wins")
  const [gameOver,setgameOver]=useState(false)

  const choices=['rock','paper', 'scissors']
 const handleOnClick=(choice)=>{
  setUserChoice(choice)
  generateComputerChoice()
 }


 const generateComputerChoice =()=>{
  const randomChoice=choices[Math.floor(Math.random()*choices.length)]

  setComputerChoice(randomChoice)
 }

 useEffect(()=>{
  const comboMoves=userChoice+computerChoice;
  if (userPoints<=4 && computerPoints<=4){
  if (comboMoves==='scissorspaper'|| comboMoves==="paperrock"||comboMoves==="rockscissors"){
    const updateuserPoint=userPoints+1;
    setuserPoints(updateuserPoint)
    setTurnResult("user got the point")
    if (updateuserPoint===5){
      setgameOver(true)
      setResult("user wins !")
    }

  }

  if (comboMoves==="paperscissors" || comboMoves==="rockpaper"|| comboMoves==="scissorsrocks"){
    const updatecomputerPoint=computerPoints+1;
    setComputerPoints(updatecomputerPoint)
    setTurnResult("Computer got the point")
    if (updatecomputerPoint===5){
      setgameOver(true)
      setResult('Computer wins')
    }
  }

  if (comboMoves==='paperpaper'|| comboMoves==='scissorsscissors'||comboMoves==='rockrock'){
    setTurnResult("No one got a point")
  }
}
 },[userChoice,computerChoice])
 const reset=()=>{
  window.location.reload()
 }
  return (
    <>
    <div className=' bg-blue-400 w-[100vw] h-[100vh] '>
  <h1 className=' text-center text-3xl font-bold py-[30px]'>Rock-Paper-Scissors-Game</h1>
  <div className=' flex justify-around '>
    <h2 className='text-[25px] my-[10px]'>User Points: {userPoints}
    </h2>
    <h2 className='text-[25px] my-[10px]'>Computer Points:
      {computerPoints}
    </h2>
  </div>
   
   <div className=' flex justify-around my-[20px]'>
    <img src={`../images/${userChoice}.webp`} className='w-[150px] h-[150px] rounded-full' alt="" />
    <img src={`../images/${computerChoice}.webp`} className='w-[150px] h-[150px] rounded-full' alt="" />
   </div >
 <div children='button-div' className=' flex gap-5 items-center justify-center my-[30px]'>
  {choices.map((choice, index)=> 
  <button className='border border-orange-600 bg-orange-300 px-5 py-2 rounded-md' key={index} onClick={()=> handleOnClick(choice)} disabled={gameOver}>
    {choice}
  </button>)}
 </div>
 
 <div className='result text-center my-[40px]'>
 <h1 className='text-xl font-semibold '>turn result: {turnResult}</h1>
 <h1 className='text-xl font-semibold '>final result: {result}</h1>
 </div>

 <div className='flex justify-center'>
  {gameOver&& <button className='border border-orange-600 bg-orange-300 px-5 py-2 rounded-md' onClick={()=>reset()}>Restart game ?</button>}
 </div>
    </div>
    </>
  )
}

export default App
