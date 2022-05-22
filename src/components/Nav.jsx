import React from 'react';
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';
import s from './styles/Nav.module.css';

function Nav({onSearch}) {
  <Nav/>
  return (
    <nav className={s.navContainer}>
      <Link to="/" className={s.home}>
        <span className={s.nameApp} >
           WEATHER APP   
        </span>  
        </Link>
        <Link to='/about'className={s.about}>
          <span >About</span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;