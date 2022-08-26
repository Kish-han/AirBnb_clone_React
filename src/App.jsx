import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import { Routes, Route } from "react-router-dom";
import Searchpage from './Searchpage/Searchpage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Searchpage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
