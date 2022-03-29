// styles
import './App.css';
// local files
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
// Material-ui
import { LinearProgress } from '@mui/material'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <ItemListContainer />
      </div>
    </div>

  );
}

export default App;
