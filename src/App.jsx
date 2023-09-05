import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/Contador'
import Card from './components/Card'

const useCounter = () => {
  const [count, setCount] = useState(0)

  const incrementar = () => setCount(count+1)
  const decrementar = () => setCount(count-1)
  const reset = () => setCount(0)

  return{
    count, incrementar, decrementar, reset
  }
}

function App() {
  const {count, incrementar, decrementar, reset} = useCounter()
  return (
    <>
    <h1 style={{ textAlign: 'center' }}>Pilotos de Formula 1</h1>

      <Card count={count}/>
      <Contador count={count} incrementar={incrementar} decrementar={decrementar} reset={reset}/>
    </>
  )
}

export default App
