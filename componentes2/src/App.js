import './App.css';

import Proptypes from 'prop-types';

function App() {
  const usuario = { 
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    correo: "cuatepec@gmail.com"
   }

  return (
    <div>
      <Saludo usuario={usuario}></Saludo>
    </div>
  );
}

const Saludo = (props) => {

  const { nombre, apellido, edad, correo } = props.usuario;

  return <div>
      {nombre && apellido ? (
        <div>
          <h1>Hola {nombre} {apellido}</h1>
          <p>Tienes {edad} años</p>
          <p>Correo: {correo}</p>

        </div>
      ) : (
        <h1>Sin datos</h1>
      )}
    </div>
  ;
}

Saludo.propTypes = {
  usuario: Proptypes.shape({
    nombre: Proptypes.string.isRequired,
    apellido: Proptypes.string.isRequired,
    edad: Proptypes.number.isRequired,
    correo: Proptypes.string.isRequired
  }).isRequired
};

export default App;
