import './App.css';
import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Gianluca" />
      <SayMyName nome="Jão" />
      <SayMyName nome={nome} />
      <Pessoa nome="Gianluca"
              idade="29"
              profissao="Programador"
              foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
