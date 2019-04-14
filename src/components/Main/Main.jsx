import React from 'react';
import Play1 from '../tasks/play1/Play1'
import { NavLink } from 'react-router-dom'

function Main () {
  return <div className='wrapper'>
    <nav className='nav'>
      <ul className='list'>
        <li className='list-item'>
          <NavLink  to='/SimplySquare'>SimplySquare</NavLink >
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
        <li className='list-item'>
          <a href="">
            Battle
          </a>
        </li>
      </ul>
    </nav>
  </div>;
}

export default Main;