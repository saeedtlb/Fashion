import React, { useEffect, useRef } from 'react';

import '../Resources/Css/sponsor.css';

import { animationFrom, addToRef } from '../utils/misc';

const Sponsor = () => {
    const sponsor_ref = useRef([]);

    useEffect(() => {
        sponsor_ref.current.forEach((el, i) => {
            animationFrom(
                el,
                {
                    autoAlpha: 0,
                    y: 20,
                },
                `0.${i + 5}`
            );
        });
    }, []);

    return (
        <div className='sponsor'>
            <img
                src='/images/sponsor-logo.png'
                alt='sponsor logo'
                ref={el => addToRef(el, sponsor_ref.current)}
            />
            <p ref={el => addToRef(el, sponsor_ref.current)}>
                official sponsor
            </p>
        </div>
    );
};

export default Sponsor;
