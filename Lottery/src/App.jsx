import './App.css'
import { sum } from './components/Helper.js'
import Lottery from './components/Lottery.jsx'

function App() {
  const winningSum =(ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      <Lottery n={3} winningSum={winningSum}/>
    </>
  )
}

export default App;
