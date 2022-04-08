import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListCategory from './components/ItemListCategory'
import Contacto from './pages/Contacto'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/productos" element={<ItemListContainer />}></Route>
          <Route path="/productos/:category" element={<ItemListCategory />}></Route>
          <Route path="/productos/:category/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<h1>ERROR 404 - Página no encontrada</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;