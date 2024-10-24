import React from 'react';
import './Home.css';
import jeanImage from '../img/jean.jpg'; 

const Home = () => {
  return (
    <section className="home-section" id='home'>
      <div className='home-title'> 
      <h1>Home</h1>
      <hr className="divider" />
      </div> 
      <div className="home-container">
        {/* Image Section */}
        <div className="home-image">
          <img src={jeanImage} alt="Jean" className="profile-img" />
        </div>

        {/* Text Section */}
        <div className="home-description">
          <h2>Jeanzey Romano</h2>
          <p className="roles">UI / UX Designer | Web Developer | Mobile App Developer</p>
          <p className='a-description'>
            Whether designing intuitive interfaces, building fluid and responsive apps, or developing 
            websites that merge beauty with function, I’m passionate about making technology feel effortless. 
            Every project is a <span className='highlighted-text'>reflection of my commitment</span>  to both form and function. Explore my work to see 
            how I turn ideas into meaningful, user-driven experiences.
          </p>
          <div className="home-buttons">
            <button className="btn btn-projects"><a href='#projects'>Projects</a></button>
            <button className="btn btn-contact"><a href='#contact'>Get in touch!</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
