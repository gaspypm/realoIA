import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const language = 'en';

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
    <div>
      <h1>Puntaje: {score}</h1>
    </div>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => axios.get('https://thispersondoesnotexist.com/')}></button>
        <button onClick={() => setScore((score) => score + 1)}>
          Jugar de nuevo
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="language-selector">
      <select value={language} onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
    </>
  )
}

export default App
