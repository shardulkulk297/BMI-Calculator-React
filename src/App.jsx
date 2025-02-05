import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70)


  const onWeightChange = (e)=>{
    setWeight(e.target.value)
  }
  const onHeightChange = (e)=>{
    setHeight(e.target.value);
  }

  const output = useMemo(()=>{

    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);

  },[weight, height])



  return (
    <>
      <h1>BMI Calculator</h1>

      <div className="input-section">
        <p className='slider-output'>Weight: {weight}</p>
        <input className='input-slider' type="range" step="1" min={40} max={200} 
        onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height}</p>
        <input type="range" 
        step="1"
        min={100}
        max={220}
        className="input-slider"
         onChange={onHeightChange} />

        <div className="output-section">
          <p>Your BMI is: </p>
          <p className='output'>{output}</p>
        </div>


      </div>
    </>
  )
}

export default App
