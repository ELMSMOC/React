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
  return <div>
      <h1>Hola {props.usuario.nombre} {props.usuario.apellido}</h1>
      <p>Tienes {props.usuario.edad} años</p>
      <p>Correo: {props.usuario.correo}</p>
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
