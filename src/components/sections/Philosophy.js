import React from 'react';
import Button from '../atoms/Button';
import homeEthos from '../../assets/images/art-vectors/home-ethos-01-2500b.webp';
import philosophyVideo from '../../assets/video/what-we-believe-in.mp4';


function Philosophy() {
  return (
    <>
    <section className="philosophy">
      <figure>
          <img className="hoyne-ethos" src={homeEthos} alt="Hoyne Ethos" />
        </figure>
      <div className="main-content-philosophy">
        <div className="column--media">
          <video className='philosophy-video' controls >
            <source src={philosophyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="column--text">
          {/* <figure>
            <img className="hoyne-ethos" src={homeEthos} alt="Hoyne Ethos" />
          </figure> */}
          <div className="text-content-philosophy">
            <h2>What We Believe In</h2>
            <p>Beer is certainly about what is in the glass — but it’s also about people sharing good times. It’s about tradition and simple pleasures.</p>
            <Button></Button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Philosophy