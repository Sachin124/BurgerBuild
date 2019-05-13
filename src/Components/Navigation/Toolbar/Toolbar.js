import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationLists from '../NavigationLists/NavigationLists';
const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Button</div>
            {/* <div>Logo</div> */}
            <Logo />
            <nav>
                <NavigationLists />
            </nav>
            <div>...</div>
        </header>);
}

export default toolbar;