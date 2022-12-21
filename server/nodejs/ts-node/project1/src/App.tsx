import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import words from './assets/wordList.json';

function App() {
  const clout = () => {
    return words[Math.floor(Math.random() * words.length)]
  }
  const [count, setCount] = useState(clout);

  return (
    <div className="App">
      <h1>
        {count}
      </h1>

    </div>
  )
}

export default App
