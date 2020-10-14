import React, { useRef, useEffect } from 'react';

import '../Resources/Css/distortion.css';

import { animationFrom } from '../utils/misc';

import hoverEffect from 'hover-effect';

const Distortion = () => {
    const image_ref = useRef(null);

    useEffect(() => {
        animationFrom(
            image_ref.current,
            {
                autoAlpha: 0,
                y: 20,
            },
            1
        );

        new hoverEffect({
            parent: image_ref.current,
            intensity: 0.5,
            image1: '/images/01.png',
            image2: '/images/02.png',
            displacementImage: '/images/diss.png',
            imagesRatio: 700 / 600,
        });
    }, []);

    return <div className='distortion' ref={image_ref}></div>;
};

export default Distortion;
