import { useState } from 'react'

const StatisticLine =({text,value})=>{
return(
  <p>{text} {value}</p> 
)
}

const Button = ({handleClick,text})=> (
  <button onClick ={handleClick}>
    {text}
  </button>
)

const Statistics = ({good,neutral,bad}) => {
  const all = good+neutral+bad
  const average= (good-bad)/all
  const positive = good/all*100
if(all===0){
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}


  return (
    <>

    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <StatisticLine text="all" value ={all} />
    <StatisticLine text="average" value ={average} />
    <StatisticLine text="positive" value ={positive +" %"} />


    </>
)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={()=> setGood(good+1)} text="good"></Button>
      <Button handleClick={()=> setNeutral(neutral+1)} text="neutral"></Button>
      <Button handleClick={()=> setBad(bad+1)} text="bad"></Button>


      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad ={bad}></Statistics>
    </div>
  )
}

export default App