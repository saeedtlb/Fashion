import React, { useEffect, useRef } from 'react';

import '../Resources/Css/text.css';

import { animationFrom } from '../utils/misc';

const Text = () => {
    const texts_ref = useRef([]);
    const subHeader_ref = useRef(null);

    useEffect(() => {
        texts_ref.current.forEach((el, i) => {
            animationFrom(
                el,
                {
                    y: '100%',
                },
                `0.${i + 2}`
            );
        });

        animationFrom(
            subHeader_ref.current,
            {
                autoAlpha: 0,
                x: -10000,
            },
            0.5
        );
    }, []);

    const addToRef = el => {
        if (el && !texts_ref.current.includes(el)) {
            texts_ref.current.push(el);
        }
    };

    return (
        <article className='text'>
            <h1>
                <span className='hidetext' ref={addToRef}>
                    toni&amp;guy
                </span>
            </h1>
            <h2 ref={subHeader_ref}>duality</h2>
            <h3>
                <span className='hidetext' ref={addToRef}>
                    collection 2020 <br /> duality
                </span>
            </h3>
            <p>
                <span className='hidetext' ref={addToRef}>
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
