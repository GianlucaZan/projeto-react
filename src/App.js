import './App.css';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Gianluca" />
      <SayMyName nome="Jão" />
      <SayMyName nome={nome} />
      <Pessoa nome="Gianluca"
              idade="29"
              profissao="Programador"
              foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
