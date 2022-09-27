import './styles/style.scss';

import './App.css';
import Header from './components/sections/Header.js';
import Footer from './components/sections/Footer.js';
import Hero from './components/sections/Hero.js';
import OurBeer from './components/sections/OurBeer.js';
import LatestNews from './components/sections/LatestNews.js';
import Philosophy from './components/sections/Philosophy.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter basename="hoyne-brewing">
      <div basename="hoyne-brewing" className="App">
        <header className="App-header">
        <Header></Header>
        </header>
        <Hero></Hero>
        <OurBeer></OurBeer>
        <LatestNews></LatestNews>
        <Philosophy></Philosophy>
        <Footer></Footer>
      </div>
    // </BrowserRouter>
  );
}

export default App;
