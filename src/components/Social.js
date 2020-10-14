import React, { useEffect, useRef } from 'react';

import '../Resources/Css/social.css';
import { addToRef, animationStagger } from '../utils/misc';

const Social = () => {
    const media_ref = useRef([]);

    useEffect(() => {
        animationStagger(media_ref.current, {
            autoAlpha: 0,
            x: -20,
        });
    }, []);

    return (
        <div className='social_media'>
            <ul>
                <li ref={el => addToRef(el, media_ref.current)}>facebook</li>
                <li ref={el => addToRef(el, media_ref.current)}>instagram</li>
                <li ref={el => addToRef(el, media_ref.current)}>twitter</li>
            </ul>
        </div>
    );
};

export default Social;
