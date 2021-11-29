import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Containers/Home/Home';
import Movies from './Containers/Movies/Movies';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <div>
          
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>

        </div>

        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
