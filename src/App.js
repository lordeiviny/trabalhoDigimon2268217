import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import List from './pages/List';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/detalhes/:name' element={<Detalhes />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;