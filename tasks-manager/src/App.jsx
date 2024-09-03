import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './Components/TaskInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskInput />
    </>
  )
}

export default App
