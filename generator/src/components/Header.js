import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <nav>
      <ul>
        <Link className='links' to='/'>Home  </Link>
        <Link className='links' to='/character'>  Character</Link>
      </ul>
    </nav>
  </div>
)
export default Header
