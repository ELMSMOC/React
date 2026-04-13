import logo from './logo.svg';
import './App.css';

function App() {

  

  const miArray = () => {
    const numerosArray = [
      {id:1, numero: 15},
      {id:2, numero: 20},
      {id:3, numero: 25},
      {id:4, numero: 30},
      {id:5, numero: 35}
    ]

    return(
      <p>{numerosArray.map(item => {
        return <p key={item.id}>Position &nbsp;{item.id}&nbsp;{item.numero }</p>;
      })}</p>
    );
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>numeros de array</h1>
        {miArray()}

      </header>
    </div>
  );
}

export default App;
