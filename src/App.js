import logo from './logo.svg';
import './App.css';
import RiquadroColore from './RiquadroColore';
import Form from './Form';
import { useState } from 'react';

function App() {

  const [colore,setColore] = useState({})

  function prendiColori(colors){
      setColore({backgroundColor: `rgb(${colors.numero1}, ${colors.numero2}, ${colors.numero3})`})  
  }

  return (
    <div className="App">
      <Form getColors={prendiColori}/>
      <RiquadroColore  backgroundColor={colore}/>
    </div>
  );
}

export default App;
