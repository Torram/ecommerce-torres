import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Bienvenido visitante."/>
    </div>
  );
}

export default App;
