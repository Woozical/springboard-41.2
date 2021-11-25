import './App.css';
import { useState } from 'react';

const getFromLocalStorage = () => {
  const local = localStorage.getItem("cfColors");
  return local ? local : [];
}

const saveToLocalStorage = (newColor) => {
  let local = localStorage.getItem("cfColors");
  local = local ? local : [];
  local.push(newColor);
}

function App() {
  const [colors, setColors] = useState(getFromLocalStorage);
  return (
    <div className="App">

    </div>
  );
}

export default App;
