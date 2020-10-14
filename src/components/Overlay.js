import React, { useEffect, useRef } from 'react';

import '../Resources/Css/overlay.css';
import { addToRef, animationTo } from '../utils/misc';

const Overlay = () => {
    const overlay_ref = useRef([]);

    useEffect(() => {
        overlay_ref.current.forEach((el, i) => {
            animationTo(el, `0.${2 * i + 5}`);
        });
    }, []);

    return (
        <div className='wrapper'>
            <div
                className='overlay'
                ref={el => addToRef(el, overlay_ref.current)}
            ></div>
            <div
                className='overlay'
                ref={el => addToRef(el, overlay_ref.current)}
            ></div>
            <div
                className='overlay'
                ref={el => addToRef(el, overlay_ref.current)}
            ></div>
        </div>
    );
};

export default Overlay;
