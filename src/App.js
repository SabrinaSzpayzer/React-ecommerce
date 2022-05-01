import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListCategory from './components/ItemListCategory'
import Cart from './components/Cart'
//pages
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
//context
import { CartProvider } from './context/CartContext'
 
function App() {
  return (
    <div className="App">
      <CartProvider >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/productos" element={<ItemListContainer />}></Route>
            <Route path="/productos/:category" element={<ItemListCategory />}></Route>
            <Route path="/productos/:category/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/contacto" element={<ContactPage />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<h1>ERROR 404 - Página no encontrada</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;