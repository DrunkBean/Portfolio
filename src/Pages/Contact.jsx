import React from 'react';
import './Contact.css';
import ContactImg from '../img/contact.png'; 
import { ReactComponent as Email } from '../img/bx-envelope.svg';
import { ReactComponent as IG } from '../img/bxl-instagram.svg';
import { ReactComponent as FB } from '../img/bxl-facebook.svg';
import { ReactComponent as Link } from '../img/bxl-linkedin.svg';

const Contact = () => {
  return (
    <section className="contact-section" id='contact'>
      <div className='home-title'> 
      <h1>Contact Me</h1>
      <hr className="divider" />
      </div> 
      <div className="contact-container">
        {/* Image Section */}
        <div className="contact-image">
          <img src={ContactImg} alt="Contact" className="con-img" />
        </div>

        {/* Text Section */}
        <div className="contact-text">
          <h2 className="contact-title">
            Ready to take your project to <span className="highlighted-text">the next level</span>? Let’s talk!
          </h2>
          <ul className="contact-social">
            <li className="social-item">
              <Email/>
              <p>jeanzey.romano@gmail.com</p>
            </li>
            <li className="social-item">
              <IG/>
              <p>goodest_boiiii</p>
            </li>
            <li className="social-item">
              <FB/>
              <p>Jeanzey Clye Romano</p>
            </li>
            <li className="social-item">
              <Link/>
              <p>Jeanzey Clye Romano</p>
            </li>
          </ul>
        </div>
      </div>
            {/* Footer Section */}
            <footer className="footer">
        <div className="footer-container">
          <p>© 2024 Copyright | Jeanzey Clye Romano</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
