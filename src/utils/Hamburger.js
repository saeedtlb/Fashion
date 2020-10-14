import React from 'react';

import '../Resources/Css/hamburger.css';

import { addToRef } from './misc';

const Hamburger = ({ navbar, click, color }) => {
    return (
        <div className='hamburger' ref={el => addToRef(el, navbar)}>
            <label>
                <input type='checkbox' />
                <svg
                    viewBox='0 0 100 100'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={click}
                >
                    <circle cx='50' cy='50' r='30' fill={color} />
                    <path
                        className='line--1'
                        d='M0 40h62c13 0 6 28-4 18L35 35'
                    />
                    <path className='line--2' d='M0 50h70' />
                    <path
                        className='line--3'
                        d='M0 60h62c13 0 6-28-4-18L35 65'
                    />
                </svg>
            </label>
        </div>
    );
};

export default Hamburger;
