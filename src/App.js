import './App.css';
import Board from './Components/Board';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MainMenu from './Components/MainMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainMenu/>}/>
        <Route path="/game" element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;