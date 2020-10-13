import React, { useEffect, useRef } from 'react';

import '../Resources/Css/text.css';

import { Expo, TweenMax } from 'gsap';

const Text = () => {
    const brand_ref = useRef(null);

    useEffect(() => {
        TweenMax.from(brand_ref.current, 1.5, {
            delay: 0.7,
            y: '100%',
            ease: Expo.easeInOut,
        });
    }, []);

    return (
        <article className='text'>
            <h1>
                <span className='hidetext' ref={brand_ref}>
                    toni&amp;guy
                </span>
            </h1>
            <h2>duality</h2>
            <h3>
                <span className='hidetext'>
                    collection 2020 <br /> duality
                </span>
            </h3>
            <p>
                <span className='hidetext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim molestiae vitae nulla nemo unde, dolor dignissimos
                    deserunt impedit optio ullam neque. Perspiciatis, repellat.
                    Rem illum voluptatibus quibusdam laborum. Autem, vero?
                </span>
            </p>
        </article>
    );
};

export default Text;
