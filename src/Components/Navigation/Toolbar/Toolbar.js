import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationLists from '../NavigationLists/NavigationLists';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.toggle}/>
                <Logo height="80%" />

            <nav className={classes.DesktopOnly}>
                <NavigationLists />
            </nav>

            {/* <div><button onClick={props.toggle}>...</button></div> */}
        </header>);
}

export default toolbar;