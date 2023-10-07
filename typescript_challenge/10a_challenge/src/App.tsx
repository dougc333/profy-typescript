import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export function ProductCard() {
  const [numClicks, setNumClicks] = useState(0)

  const onClick = (event: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
    event.preventDefault();
    console.log("click recorded")
    setNumClicks((numClicks)=>numClicks+1)
  };

  return <div onClick={onClick}>{numClicks} Click Me</div>;
}


function App() {

  return (
    <ProductCard />
  )
}

export default App
