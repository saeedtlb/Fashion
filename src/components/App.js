import React from 'react';

import '../Resources/Css/index.css';

import Navbar from './Navbar';
import Social from './Social';
import Sponsor from './Sponsor';
import Text from './Text';

const App = () => {
    console.log('come');
    return (
        <div className='App'>
            <Navbar />
            <Social />
            <Sponsor />
            <Text />
        </div>
    );
};

export default App;
