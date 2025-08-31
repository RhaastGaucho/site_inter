import React, {useState} from 'react'; 
import './App.css';
import MyBody from './MyBody.js';

function App() {

  const [str, setStr] = useState('Olá, Mundo!');
  function handleClick(){
    setStr('Olá Danki Code');
  }

  return (
    <div className="App">
      <h2>{str}</h2>
      <button onClick={()=>handleClick()}>Clique aqui!</button>
      <MyBody></MyBody>
    </div>
  );
}

export default App;
