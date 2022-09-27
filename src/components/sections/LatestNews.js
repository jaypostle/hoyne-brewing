import React from 'react'
import NewsCard from '../atoms/NewsCard';
import fiesta from '../../assets/images/backdrops/Fiesta-1.webp';


function LatestNews() {
  return (
    <>
    <section className='latest-news-section'>
      <div className='section-title-latest-news'>
        <h2>The Latest</h2>
        <a href="#">View All</a>
      </div>
      <div className="news-grid">
        <article className='news-highlight-post'>
        {/* <h3 className='highlight-news-title'>Hoyne Fiesta: A Little Celebration</h3> */}

          <figure className='latest-news-figure'>
            <h3 className='highlight-news-title'>Hoyne Fiesta: A Little Celebration</h3>
            <div className='image-wrapper'>
             <img className="fiesta" src={fiesta} alt="Fiesta Beer Pack" />
             {/* <div className='background'></div> */}
            </div>
            <NewsCard></NewsCard>
          </figure>
      
        </article>
        {/* <div className="news-wrapper"> */}
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
        {/* </div> */}
      </div>
    </section>
    </>
  )
}

export default LatestNews