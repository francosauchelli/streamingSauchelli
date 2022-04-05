// routing
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// styles
import './App.css';
// local files
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import DetailPage from './pages/Detail'
import NotFoundPage from './pages/NotFoundPage'
// Material-ui
import { LinearProgress } from '@mui/material'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <div className="main-container">
          <Routes >  
            <Route path='/' element={ <Home /> } />
            <Route path='/:type' element={ <Home /> } />
            <Route path='/:type/:id' element={ <DetailPage /> } />
            <Route path='*' element={ <NotFoundPage /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
