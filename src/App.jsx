import { useState } from 'react'
import Board from './components/Board'
import Game from './components/Game'
import "./sass/style.scss"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game/>
    </>
  )
}

export default App
