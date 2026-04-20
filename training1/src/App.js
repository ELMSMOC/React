
import './App.css';
import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Boton1, Container } from './styled';
import parrafos from './data/nopuedo.json' ;



function App() {
  
  const [parrafo, setParrafo]= useState(0);

  /* useEffect(() => {
    console.log(`estas leyendo el parrafo: ${parrafo + 1}`);
  }, [parrafo]); */ 

  /* useEffect(() => {
  const colores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
  document.body.style.backgroundColor = colores[parrafo];
}, [parrafo]); */

useEffect (() => {
  const colorAleatorio = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = colorAleatorio;
  
}, [parrafo]);

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
