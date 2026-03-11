import {useState} from 'react'

const Button = (props) => {
  return(
      <button onClick={ () => { props.onClickEvent(props.value+1) } }>{props.text}</button>
  );
  }

const StatisticLine  = (props) => {
  return(
    <td>{props.text} {props.value}</td>
  )
}
const Statistics  = (props) => {
  if(props.good ==0 && props.bad == 0 && props.neutral == 0) {
    return(
      <div>no feedback given</div>
    )
  }
  return (
    <div>
    <h2>statistics</h2>
    <table>
      <tr><StatisticLine  text="good" value = {props.good}/></tr>
      
      <tr><StatisticLine  text="neutral" value = {props.neutral}/> </tr>
      <tr><StatisticLine  text="bad" value = {props.bad}/></tr>
      <tr><StatisticLine  text="all" value = {props.good + props.neutral + props.bad}/></tr>
      <tr><StatisticLine  text="average" value = {(props.good -props.bad)/(props.good + props.neutral + props.bad)} /></tr>
      <tr><StatisticLine  text ="postive feedback" value = {(props.good * 100)/(props.good + props.neutral + props.bad) }/></tr>
    </table>
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClickEvent = {setGood} value = {good} text="good" />
      <Button onClickEvent = {setNeutral} value = {neutral} text="neutral" />
      <Button onClickEvent = {setBad} value = {bad} text="bad" />
      <Statistics good = {good}  neutral = {neutral}  bad = {bad} />
    </div>
  )
}

export default App