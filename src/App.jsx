import axios from 'axios'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


const language = 'en';

function App() {

  const handleClick = () => {
    axios
      .get('https://thispersondoesnotexist.com/image', {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        const image = 'data:image/jpeg;base64,' + base64;
        setImageUrl(image);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  };

  const [score, setScore] = useState(0)

  const [AIImage] = useState('')

  return (
    <>
    <div>
      <h1>Puntaje: {score}</h1>
    </div>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="image1"/>
        </a>
        <a target="_blank">
          <img src={AIImage} className="image2"/>
        </a>
      </div>
      <div className="card">
        <button onClick={() => setScore((score) => score + 1)}>
          Jugar de nuevo
        </button>
        <button onClick={handleClick}>
          Imagen IA
        </button>
      </div>
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
