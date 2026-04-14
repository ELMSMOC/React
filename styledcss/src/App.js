
import './App.css';

import { Boton1 } from './styled';
import { Boton2 } from './styled2';

function App() {
  return (
    <div className="App">
      <Boton1 entrar={true}>
        Entrar
      </Boton1>

      <Boton2 entrar={false}>
        Salir
      </Boton2>

      

    
    </div>
  );
}

export default App;
