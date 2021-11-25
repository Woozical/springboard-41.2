import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NewColorForm from './NewColorForm';
import ColorDisplay from './ColorDisplay';
import ColorIndex from './ColorIndex';

const getFromLocalStorage = () => {
  const local = JSON.parse(localStorage.getItem("cfColors"));
  return local ? local : [];
}

function App() {
  const [colors, setColors] = useState(getFromLocalStorage);
  const addToColors = (newColor) => {
    const urlName = newColor.name.toLowerCase().replaceAll(" ", "_");
    const n = {...newColor, urlName}
    setColors(c => [...c, n]);
  }
  // Local storage sync up
  useEffect(() => {
    localStorage.setItem("cfColors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="App">
      <Routes>
        <Route path="/colors/new" element={<NewColorForm submitCallback={addToColors} />} />
        <Route path="/colors/:urlName" element={<ColorDisplay colors={colors} />} />
        <Route path="/colors" element={<ColorIndex colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
