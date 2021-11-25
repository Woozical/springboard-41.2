import logo from './logo.svg';
import { Routes, Navigate, Route } from 'react-router-dom';
import DogPage from './DogPage';
import DogLinks from './DogLinks';
import './App.css';

function App(props) { 
  return (
    <div className="App">
      <Routes>
        <Route path="/dogs/:src" element={<DogPage dogs={props.dogs} />}/>
        <Route path="/dogs" element={<DogLinks dogs={props.dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" /> } />
      </Routes>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'duke',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'perry',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'tubby',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
