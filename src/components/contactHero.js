import React from 'react';
import '../App.css';
import './Hero.css';
import './contact.css';

function ContactHero() {
  return (
    <div className='hero-container'>
      <img src='https://cutewallpaper.org/21/professional-photo-backgrounds/Best-43-Professional-Dark-Background-on-HipWallpaper-Good-.jpg' alt="background"></img>
      <h1>Contact Me</h1>
      <ul>
        <li>
          EMAIL: Nicholas.G.Costanza@gmail.com
        </li>
        <li>
          Github: <a href='https://github.com/Nickcostanza' target='#blank'>Nickcostanza</a>
        </li>
        <li>
          Phone: (303)525-9822
        </li>
        <li>
          Linkedin: <a href='https://www.linkedin.com/in/nicholas-costanza-54b0321b4/' target='#blank'>Nicholas Costanza</a> 
        </li>

      </ul>
     
    </div>
  );
}

export default ContactHero;