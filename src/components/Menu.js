import React, { useEffect, useRef } from 'react';

import '../Resources/Css/menu.css';

import { TimelineMax, Expo } from 'gsap';
import { addToRef } from '../utils/misc';

const Menu = ({ show }) => {
    const below_ref = useRef(null);
    const menu_ref = useRef(null);
    const items_ref = useRef([]);
    const tl = useRef(new TimelineMax({ paused: true }));

    useEffect(() => {
        if (show === null) return;
        show ? tl.current.play() : tl.current.reverse();
    }, [show]);

    useEffect(() => {
        tl.current
            .to(below_ref.current, { duration: 0.4, left: '-98%' })
            .to(below_ref.current, { duration: 0.3, height: '100%' })
            .to(below_ref.current, { duration: 0.8, left: 0 })
            .to(menu_ref.current, { duration: 0.9, left: 0 }, '-=0.7')
            .set(items_ref.current, { display: 'block' })
            .staggerTo(
                items_ref.current,
                0.6,
                { scale: 1, opacity: 1, rotate: '0deg', ease: Expo.easeOut },
                0.25
            );
    }, []);

    return (
        <div className='menu_wrapper'>
            <div className='below' ref={below_ref}></div>
            <div className='menu' ref={menu_ref}>
                <ul>
                    <li ref={el => addToRef(el, items_ref.current)}>main</li>
                    <li ref={el => addToRef(el, items_ref.current)}>
                        products
                    </li>
                    <li ref={el => addToRef(el, items_ref.current)}>info</li>
                    <li ref={el => addToRef(el, items_ref.current)}>contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
