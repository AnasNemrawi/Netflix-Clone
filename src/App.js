
import './App.css';
import Home from './Components/Home/Home';
import Favlist from './Components/FavList/FavList';
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/favList' element={<Favlist />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
