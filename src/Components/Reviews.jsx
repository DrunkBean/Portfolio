import React from 'react';
import './Reviews.css';
import dp1 from '../img/dp1.png';
import dp2 from '../img/dp2.png';
import dp3 from '../img/dp3.png';
import { ReactComponent as Quote } from '../img/bxs-quote-right.svg';


const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {/* Left side*/}
        <div className="left-review">
          <div className='review1'>
            <div className='review-header'>
            <img src={dp1} className='left-image'></img>
                <h2>Mr. Daw Ming Su</h2>
                <p className='review-occupation'>Apple Emotional Support Team Manager</p>
                <Quote/>
                <div className='review-par'>
                    <p>Bravo, human! This UI/UX design is as smooth as my best purr and just as satisfying. It’s intuitive, elegant, and flows like a cat gliding across the floor. You've nailed it—paw-some work!</p>
                </div>
            </div>
          </div>  
          <div className='review2'>
            <div className='review-header'>
                <img src={dp2} className='left-image'></img>
                <h2>Sir Butt Crackers </h2>
                <p className='review-occupation'>Google Cat Food Quality Analyst</p>
                <Quote/>
                <div className='review-par'>
                    <p>This web development project is as smooth as my fur and loads faster than I can chase a feather. Navigating the site is easier than sneaking a snack from the kitchen! For now, just know that Sir Butt Crackers gives this a big 'paws up!'</p>
                </div>
            </div>
          </div>
        </div>
        {/* Right side*/}
        <div className="right-review">
          <div className='review3'>
            <div className='review-header'>
            <img src={dp3} className='left-image'></img>
                <h2>Engr. Bernardita Madrigal</h2>
                <p className='review-occupation'>Aerodynamics Engineer</p>
                <Quote/>
                <div className='review-par'>
                    <p>Well, color me impressed—though as a cat, I prefer to stick with my classic fur tones. You’ve truly outdone yourself with this mobile app! It’s more responsive than I am to the sound of a treat bag being opened, and that’s saying something. The design? Sleeker than my midnight zoomies across the living room. Navigation is smoother than my finest head nudge, and the app performs faster than I can knock things off a table (and trust me, I’m a pro at that).</p>

                    <p>If I had thumbs, I’d give you a five-star rating with each paw. Alas, I don’t, so this glowing review will have to do.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
