
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Favlist from './Components/FavList/FavList';
function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movieList" element={<MovieList />}></Route>
        <Route path='/favList' element={<Favlist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
