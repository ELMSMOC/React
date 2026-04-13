
import './App.css';
import React,{useState} from "react"

function App() {
  const [dias, setDias]=useState(0);
  const [opcion, setOpcion]=useState("hotel");  

  const selectorHotelCoche=(e)=>{
    setOpcion(e.target.value);
  };

  return <div>
    <select onChange={selectorHotelCoche} value={opcion}>
      <option value="hotel">Hotel</option>
      <option value="coche">Coche</option>
    </select>

    <input onChange={e=>setDias(e.target.value)} type="text" placeholder="Nº dias"/>
    
    {opcion==="hotel" && <ComponenteMultiple opcion={1} dias={dias}/>}
    {opcion==="coche" && <ComponenteMultiple opcion={2} dias={dias}/>}


  </div>
}

export default App;
