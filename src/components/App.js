import React from 'react';

import '../Resources/Css/index.css';

import Navbar from './Navbar';
import Social from './Social';
import Sponsor from './Sponsor';
import Text from './Text';
import Distortion from './Distortion';
import Overlay from './Overlay';

const App = () => {
    return (
        <div className='App'>
            <Overlay />
            <Navbar />
            <Social />
            <Text />
            <Sponsor />
            <Distortion />
        </div>
    );
};

export default App;
