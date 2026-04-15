
import './App.css';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Boton1 } from './styled';
import parrafos from './data/nopuedo.json' ;
import { Container } from './styled';


function App() {
  
  const [parrafo, setParrafo]= useState(0);

  const handleAnterior = () => {
    if  (parrafo > 0) {
      setParrafo(parrafo - 1);
    }
  }

  const handleSiguiente = () => {
    if  (parrafo < parrafos.length - 1) {
      setParrafo(parrafo + 1);
    }
  }


  return (
    <div className="App">
      <p>{parrafos[parrafo]}</p>

      <Container>
        <Boton1 onClick={handleAnterior}>Anterior</Boton1>

        <Boton1 onClick={handleSiguiente}>Siguiente</Boton1>
      </Container>
       

      
    </div>
  );
}

export default App;
