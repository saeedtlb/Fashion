import React, { useRef, useEffect } from 'react';

import '../Resources/Css/distortion.css';

import hoverEffect from 'hover-effect';

const Distortion = () => {
    const image_ref = useRef();

    useEffect(() => {
        new hoverEffect({
            parent: image_ref.current,
            intensity: 0.5,
            image1: '/images/01.png',
            image2: '/images/02.png',
            displacementImage: '/images/diss.png',
            imagesRatio: 380 / 300,
        });
    }, []);

    return <div className='distortion' ref={image_ref}></div>;
};

export default Distortion;
