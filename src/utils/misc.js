import { TweenMax, Expo } from 'gsap';

export const animationFrom = (element, vars, delay) => {
    TweenMax.from(element, 1.5, {
        ...vars,
        ease: Expo.easeInOut,
        delay,
    });
};

export const animationTo = (element, delay) => {
    TweenMax.to(element, 1.5, {
        top: '-100%',
        ease: Expo.easeInOut,
        delay,
    });
};

export const animationStagger = (arr, vars) => {
    TweenMax.staggerFrom(
        arr,
        1.5,
        {
            ...vars,
            ease: Expo.easeInOut,
            delay: 0.5,
        },
        0.08
    );
};

export const addToRef = (el, arr) => {
    if (el && !arr.includes(el)) {
        arr.push(el);
    }
};
