import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
const vr = (color) =>{
  document.documentElement.style.backgroundColor = color;
}

  return (
    <div className="flex gap-4 p-6">
      <button
        className="px-4 py-2 rounded bg-white text-black border"
        onClick={() => vr("white")}
      >
        White
      </button>

      <button
        className="px-4 py-2 rounded bg-red-600 text-white"
        onClick={() => vr("red")}
      >
        Red
      </button>

      <button
        className="px-4 py-2 rounded bg-green-600 text-white"
        onClick={() => vr("green")}
      >
        Green
      </button>

      <button
        className="px-4 py-2 rounded bg-blue-600 text-white"
        onClick={() => vr("blue")}
      >
        Blue
      </button>

      <button
        className="px-4 py-2 rounded bg-yellow-400 text-black"
        onClick={() => vr("yellow")}
      >
        Yellow
      </button>
    </div>
  )
}

export default App