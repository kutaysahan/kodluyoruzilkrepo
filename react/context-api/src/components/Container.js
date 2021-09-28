import React from 'react';

import Header from './Header';
import Button from './Button';
import Profile from './Profile';

import { useTheme } from '../context/ThemeContext';

function Container() {

    const { theme } = useTheme();
    
    return (
        <div className={`app ${theme === 'dark' ? 'dark' : 'light'}`}>
            <Header> </Header>
            <hr />
            <Button> </Button>
            <hr />
            <Profile> </Profile>
        </div>
    )
}

export default Container;
