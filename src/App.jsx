import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Navbar from './components/Navbar';
import ViewChamp from './views/ViewChamp';
import RandomChamp from './views/RandomChamp';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<ViewChamp />} path="/champ/:id" />
        <Route element={<RandomChamp />} path="/champ/random" />
      </Routes>
    </div>
  );
}

export default App;
