import './styles/style.scss';

import './App.css';
import Header from './components/sections/Header.js';
import Footer from './components/sections/Footer.js';
import Hero from './components/sections/Hero.js';
import OurBeer from './components/sections/OurBeer.js';
import LatestNews from './components/sections/LatestNews.js';
import Philosophy from './components/sections/Philosophy.js';

function PageHome() {
  return (
    <div basename="moveo-database-app" className="App">
      <header className="App-header">
       <Header></Header>
      </header>
      <Hero></Hero>
      <OurBeer></OurBeer>
      <LatestNews></LatestNews>
      <Philosophy></Philosophy>
      <Footer></Footer>
    </div>
  );
}

export default PageHome;
