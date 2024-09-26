import React from 'react';
import logo from './logo.svg';
import './App.css';
import EjemploButton from './components/EjemploButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <EjemploButton nombre="Nuevo Nombre" onClick={()=> console.log("Hola")}/>
      </header>
    </div>
  );
}

export default App;
