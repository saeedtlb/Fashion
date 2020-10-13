import React from 'react';

import '../Resources/Css/navbar.css';

import Hamburger from '../utils/Hamburger';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Hamburger />
            <div className='navbar__lang'>eng</div>
            <div className='navbar__search'>
                <img src='/images/search.png' alt='search' />
            </div>
        </nav>
    );
};

export default Navbar;
