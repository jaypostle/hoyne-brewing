import React, { useEffect, useState } from 'react';
import hoyneLogo from '../../assets/images/logo/hoynelogo-colour.png';
import hoyneTransparent from '../../assets/images/logo/hoyne2_orig.png';
import heroBackgroundBrewery from '../../assets/images/art-vectors/home-hero-brewery-ext-03d-2220.webp';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

// beers
import hoynePilsner from '../../assets/images/beers/bottles/bottle-650-pilsner-01-1934-1.webp';
import downEasy from '../../assets/images/beers/bottles/bottle-355-down-easy-03-1792.webp';
import summerHaze from '../../assets/images/beers/bottles/bottle-355-summer-haze-03-1792.webp';
import appleton from '../../assets/images/beers/bottles/bottle-650-appleton-01-1934.webp';
import carteBlanche from '../../assets/images/beers/bottles/bottle-650-carte-blanche-01-1934-2.webp';
import darkMatter from '../../assets/images/beers/bottles/bottle-650-dark-matter-01-1934.webp';
import entreNous from '../../assets/images/beers/bottles/bottle-650-entre-nous-01-1934.webp';
import finnegans from '../../assets/images/beers/bottles/bottle-650-finnegans-01-1934.webp';
import gratitude from '../../assets/images/beers/bottles/bottle-650-gratitude-01-1934-1.webp';
import hazyIpa from '../../assets/images/beers/bottles/bottle-650-hazy-ipa-vol1-01-1934.webp';
import helios from '../../assets/images/beers/bottles/bottle-650-helios-01-1934-1.webp';
import highVoltage from '../../assets/images/beers/bottles/bottle-650-high-voltage-01-1934.webp';
import sveCzech from '../../assets/images/beers/bottles/bottle-650-sve-czech-01-1934.webp';
import tenReasons from '../../assets/images/beers/bottles/bottle-650-ten-reasons-01-1934.webp';
import terraFirma from '../../assets/images/beers/bottles/bottle-650-terra-firma-01-1934.webp';
import vienna from '../../assets/images/beers/bottles/bottle-650-vienna-01-1934.webp';
import weizenbock from '../../assets/images/beers/bottles/bottle-650-weizenbock-01-1934.webp';
import wolfVine from '../../assets/images/beers/bottles/bottle-650-wolf-vine-01-1934.webp';




function Hero() {

  let beers = [
    {image: hoynePilsner, title: 'pilsner'},
    {image: downEasy, title: 'down easy'},
    {image: summerHaze, title: 'summer haze'},
    {image: appleton, title: 'pilsner'},
    {image: carteBlanche, title: 'down easy'},
    {image: darkMatter, title: 'summer haze'},
    {image: entreNous, title: 'pilsner'},
    {image: finnegans, title: 'down easy'},
    {image: gratitude, title: 'summer haze'},
    {image: hazyIpa, title: 'pilsner'},
    {image: helios, title: 'down easy'},
    {image: highVoltage, title: 'summer haze'},
    {image: sveCzech, title: 'pilsner'},
    {image: tenReasons, title: 'down easy'},
    {image: terraFirma, title: 'summer haze'},
    {image: vienna, title: 'pilsner'},
    {image: weizenbock, title: 'down easy'},
    {image: wolfVine, title: 'summer haze'},
    {image: hoynePilsner, title: 'pilsner'},
    {image: downEasy, title: 'down easy'},
    {image: summerHaze, title: 'summer haze'},
    {image: appleton, title: 'pilsner'},
    {image: carteBlanche, title: 'down easy'},
    {image: darkMatter, title: 'summer haze'},
    {image: entreNous, title: 'pilsner'},
    {image: finnegans, title: 'down easy'},
    {image: gratitude, title: 'summer haze'},
    {image: hazyIpa, title: 'pilsner'},
    {image: helios, title: 'down easy'},
    {image: highVoltage, title: 'summer haze'},
    {image: sveCzech, title: 'pilsner'},
    {image: tenReasons, title: 'down easy'},
    {image: terraFirma, title: 'summer haze'},
    {image: vienna, title: 'pilsner'},
    {image: weizenbock, title: 'down easy'},
    {image: wolfVine, title: 'summer haze'},
    {image: hoynePilsner, title: 'pilsner'},
    {image: downEasy, title: 'down easy'},
    {image: summerHaze, title: 'summer haze'},
    {image: appleton, title: 'pilsner'},
    {image: carteBlanche, title: 'down easy'},
    {image: darkMatter, title: 'summer haze'},
    {image: entreNous, title: 'pilsner'},
    {image: finnegans, title: 'down easy'},
    {image: gratitude, title: 'summer haze'},
    {image: hazyIpa, title: 'pilsner'},
    {image: helios, title: 'down easy'},
    {image: highVoltage, title: 'summer haze'},
    {image: sveCzech, title: 'pilsner'},
    {image: tenReasons, title: 'down easy'},
    {image: terraFirma, title: 'summer haze'},
    {image: vienna, title: 'pilsner'},
    {image: weizenbock, title: 'down easy'},
    {image: wolfVine, title: 'summer haze'},
    {image: hoynePilsner, title: 'pilsner'},
  ]

  let beerFlash = 0;
  const [currentImage, setCurrentImage] = useState(false);


  function beerSlider() {
    console.log('beer slider ran');

    setInterval(() => {
      if(beerFlash < beers.length) {
      console.log(beerFlash);
      // currentImage = beers[beerFlash].image;
      console.log(beers[beerFlash].image)
      // setCurrentImage(downEasy);
      setCurrentImage(beers[beerFlash].image);
      beerFlash++;
    }
    }, 150);
  }
  

  function testSlider() {
      console.log('test slider ran');
      setCurrentImage(downEasy);
      
      // console.log(currentImage);
 
  };
  // beerSlider();

  useEffect(() => {
    setCurrentImage(hoynePilsner);
    // testSlider();
    // beerSlider();
    // console.log(currentImage);

    const timer = setTimeout(() => beerSlider(), 1000);
    return () => clearTimeout(timer);
  }, []);




 

  // make an object asset with my images (like in my portfolio)
  // make a function that flows through the images and displays the next in the sequence
  // make a function that progressively gets slower in the slideshow animation
  // could set three speeds = 200ms 400ms 800ms
  // every foreach adds a slide to variable = sliderCounter
  // when slideCounter is < 10, speed = xyz, when it's < 20 = xyz etc
  // copy my object to make a massive number of images.
  
  return (
    <>
    <section className='home-hero-section'>
      <div className='background-blur'></div>
      <div className="home-inner-wrapper"> 
        <img className="hoyne-logo" src={hoyneTransparent} alt="Hoyne Logo" />
          <div className="visible-content">
            <div className="content-container">
              <h1>Fine beer for fine people</h1>
              <div className="bottle-transition-div">
                <figure className='bottle-slideshow'>
                  {/* <img className="hoyne-pilsner" src={hoynePilsner} alt="Hoyne Pilsner" /> */}

                  { currentImage !== false && <img className="hoyne-pilsner" src={currentImage} alt="Hoyne Pilsner" />}

                  {/* {
                    beers && beers.map((img) => 
                      <img className="beer bottle" src={img.image} alt={img.title} />)
                  } */}
                </figure>
              </div>
              <p>Hoyne Brewing Co. is a family-owned brewery that believes in people. It is at the core of everything we do. We like to think of our team and community as our extended family—and what better way to celebrate than sharing a beer made from the finest ingredients and a deep love of the craft.</p>
            </div>
          </div>
          
      </div>
      <div className="background-hero">
        <div className="image-wrapper">
              <figure className='hero-background-figure'>
                <img className="hero-background-image" src={heroBackgroundBrewery} alt="Art of our brewery" />
              </figure>
        </div>
        
        <div className="noise"></div>
      </div>
      
    </section>
    
    </>

  )
}

export default Hero


