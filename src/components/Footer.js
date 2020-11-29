import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer'>
        <p className='thank-you-message'>
          Thank you for visting my Portfolio!
        </p>

      </section>
          <div class='social-icons'>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/nickcostanzaa/'
              target='#blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/Nickcostanza'
              target='#blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/nicholas-costanza-54b0321b4/'
              target='#blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
    </div>
  )
}
export default Footer;