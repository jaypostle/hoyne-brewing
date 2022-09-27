import React, { useEffect } from 'react';
import Button from '../atoms/Button';
import NextButton from '../atoms/NextButton';
import homeTank from '../../assets/images/art-vectors/home-tank-black-filled-01.webp';
import { textBannerScrolling } from '../../scripts/textBanner';


function OurBeer() {

  // useEffect(() => {
  //   textBannerScrolling();
  
  // });

  return (
    <>
    <section className='curved-edge-section'>
      <div className='curved-edge'></div>
    </section>
    <section className='our-beer-section'>
      {/* <div className='curved-edge'></div> */}
      <div className='text-banner-div'>
        <div className="banner">
          <div className='animate'>
            <span className='banner-text banner-text--1'>Hoyne Pilsner. Dark Matter. Helios Dortmunder.</span>
            <span className='banner-text banner-text--1'>Hoyne Pilsner. Dark Matter. Helios Dortmunder.</span>
          </div>
          <div >
            <span className='banner-text banner-text--2'>Appleton’s Finest British Ale. Vienna Amber Lager. Down Easy Pale Ale.
            </span>
            <span className='banner-text banner-text--2'>Appleton’s Finest British Ale. Vienna Amber Lager. Down Easy Pale Ale.
            </span>
          </div>
          <div >
            <span className='banner-text banner-text--3'>Carte Blanche Belgian White IPA. Finnegans Irish Stout. Summer Haze Honey Wheat Beer.</span>
            <span className='banner-text banner-text--3'>Carte Blanche Belgian White IPA. Finnegans Irish Stout. Summer Haze Honey Wheat Beer.</span>
          </div>
        </div>
      </div>
      <article className='columns'>
        <div className='column column--media'> 
          <figure className="image-wrapper">
            <img className="homeTank" src={homeTank} alt="Beer Tank" />
          </figure>
          
        </div>
       
        <div className='column column--text our-beer-wrapper'>
          <h2>Our Beer</h2>
          <p>Brewed with a love of the history, the science and the craft of finely made beer.</p>
          <Button></Button>

          {/* <NextButton></NextButton> */}
        </div>
      </article>
    </section>
    </>
  )
}

export default OurBeer