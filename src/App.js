import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListCategory from './components/ItemListCategory'
import Cart from './components/Cart'
import Footer from './components/Footer'
//pages
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Error404 from './pages/Error404'
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
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;