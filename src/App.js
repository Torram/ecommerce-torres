import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting = "Bienvenido visitante"/>} />
          <Route exact path="/category/:categoryid" element={<ItemListContainer greeting = "Bienvenido visitante"/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
