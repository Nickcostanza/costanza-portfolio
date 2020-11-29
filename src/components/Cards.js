import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='projects' className='cards'>
      <h1>Some Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../assets/Helping-hand-Homepage.png'
              text='An application to assit those suffering from homelessness in the King County area.'
              label='Helping Hand'
              href='https://project3-helping-hand.herokuapp.com/'
            />
            <CardItem
              src='../assets/homepage-brewery.png'
              text='Application to help you find a brewery near you!'
              label='Brewery Finder'
              href='https://nickcostanza.github.io/project1-beer-finder/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../assets/Homepage.png'
              text='A CLI Application that allows a project manager to orgainze their team!'
              label='Team-Organizer'
              href='https://github.com/Nickcostanza/team-organizer'
            />
            <CardItem
              src='../assets/Note-taker-HP.png'
              text='Application to help you keep track of daily task!'
              label='Note-Pad'
              href='https://note-taker-nc.herokuapp.com/'
            />
            <CardItem
              src='../assets/readme-gen-homepage.png'
              text='CLI Application that assist programmers by creating a Readme.Md Template'
              label='Readme Generator'
              href='https://github.com/Nickcostanza/read-me-gen'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;