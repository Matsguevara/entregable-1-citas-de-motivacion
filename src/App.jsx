import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import db from "./db/quotex.json";

const arrayColors = ["#43326b","#e3175f","#e41715","#060613","#0c2b3b","#237ca1","#ae3d8f","#182244","#5c1c11","#833a0f",
"#1b3804","#486901","#849e00","#bd2330","#285b66","#0b0b98"]




const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex]
};

function App() {
  
const [quote, setQuote] = useState(getRandom(db))

const [color, setcolor] = useState(getRandom(arrayColors))

const newQuote = () => {
  setQuote(getRandom(db))
  setcolor(getRandom(arrayColors ))
}

  return (
    <div className="App" style={{backgroundColor:color}}>
      <QuoteBox quote={quote} newQuote={newQuote} color={color}/>
    </div>
  );
}

export default App
