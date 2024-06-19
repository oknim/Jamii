import { Bouton } from './IndexAccueil';
import './HeaderWeb.css'
import { useState } from 'react';

function HeaderWeb () {

  const [Menu, setMenu] = useState (false)
  const handleMenu = () => {
    setMenu (!Menu)
  }

  return <>
  <header>
      <img src="/LOGO.svg" className="headerL" alt=""/>
      <nav className={`Hnav ${Menu ? "Show-menu" : "Random"}`}>
        
        <nav className='HeaderLinks'>
          
          <img src="/LOGO.svg" className="headerL" alt=""/>

          <a title='' href='/'>
            <p className='First'>Accueil</p>
          </a>
          <a title='' href='/'>
            <p className='Second'>Agenda</p>
          </a>
          <a title='' href='/'>
            <p className='Third'>Blog</p>
          </a>
          <a title='' href='/'>
            <p className='Forth'>Rejoins nous</p>
          </a>
          <a title='' href='/'>
            <p className='Fifth'>Contact</p>
          </a>
          
          <Bouton />
          
          <button className='JoinM'>
            <img src='Join_Ico_Mobile.svg' alt=''/>
            Rejoignez nous
          </button>
          <button className='Call'>
            <img src='Phone_Ico.svg' alt=''/>
            Contactez nous
          </button>
        </nav>
        <button className='Burger' onClick={handleMenu}>
          <span className='BurgerSpan'></span>
        </button>
      </nav>
  </header>
  </>
}

export default HeaderWeb;