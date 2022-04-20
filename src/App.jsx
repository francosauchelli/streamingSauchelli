// routing
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// styles
import './App.css';
// local files
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import DetailPage from './pages/Detail';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/Cart';
import CartDetail from './components/cartDetail/CartDetail';
import { CartProvider } from './context/CartContext';
import { LangProvider } from './context/LangContext';


function App() {
  return (
    <div className="App">
      <LangProvider>
        <CartProvider >
          <BrowserRouter >
            <NavBar />
            <div className="main-container">
              <Routes >  
                <Route path='/' element={ <Home /> } />
                <Route path='/:type' element={ <Home /> } />
                <Route path='/:type/:id' element={ <DetailPage /> } />
                <Route path='/cart' element={ <CartPage /> } />
                <Route path='*' element={ <NotFoundPage /> } />
              </Routes>
            </div>
          </BrowserRouter>
        </CartProvider>
      </LangProvider>
    </div>

  );
}

export default App;
