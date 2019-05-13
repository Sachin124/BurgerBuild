import React from 'react';
import classes from './NavigationLists.module.css';
import NavigationList from './NavigationList/NavigationList';

const navigationLists = () => (
    <ul className={classes.NavigationItems}>
        <NavigationList link="/" active>Burger Builder</NavigationList>
        <NavigationList link="/">Checkout</NavigationList>
    </ul>
)

export default navigationLists;