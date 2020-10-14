import React, { useEffect, useRef } from 'react';

import '../Resources/Css/navbar.css';

import Hamburger from '../utils/Hamburger';
import { addToRef, animationStagger } from '../utils/misc';

const Navbar = () => {
    const navbar_ref = useRef([]);

    useEffect(() => {
        animationStagger(navbar_ref.current, {
            autoAlpha: 0,
            y: 20,
        });
    }, []);

    return (
        <nav className='navbar'>
            <Hamburger navbar={navbar_ref.current} />
            <div
                className='navbar__lang'
                ref={el => addToRef(el, navbar_ref.current)}
            >
                eng
            </div>
            <div
                className='navbar__search'
                ref={el => addToRef(el, navbar_ref.current)}
            >
                <img src='/images/search.png' alt='search' />
            </div>
        </nav>
    );
};

export default Navbar;
