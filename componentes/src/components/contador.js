import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(1);
  
  const incrementar = () => {
    setContador(contador + 1);
  }; 
  const decrementar = () => {
    setContador(contador - 1);
  }; 
  return (
    <div style={{ display: 'flex' }}>
      <button onClick={decrementar} >-</button>
      <input type="text" value={contador} size="2" style={{textAlign : "center"}}></input>
      <button onClick={incrementar}>+</button>
    </div>
  ); 
}

export default Contador;