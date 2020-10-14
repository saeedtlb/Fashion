import React, { useEffect, useRef, useState } from 'react';

import '../Resources/Css/navbar.css';

import Hamburger from '../utils/Hamburger';
import Menu from './Menu';
import { addToRef, animationStagger } from '../utils/misc';

const Navbar = () => {
    const [menu, setMenu] = useState(null);
    const navbar_ref = useRef([]);

    useEffect(() => {
        animationStagger(navbar_ref.current, {
            autoAlpha: 0,
            y: 20,
        });
    }, []);

    return (
        <>
            <nav className='navbar'>
                <Hamburger
                    navbar={navbar_ref.current}
                    click={() => setMenu(prev => !prev)}
                    color={menu ? 'tomato' : 'gold'}
                />
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
            <Menu show={menu} />
        </>
    );
};

export default Navbar;
