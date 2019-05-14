import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationlists from '../NavigationLists/NavigationLists';
import classes from './SideDrawer.module.css'
import Auxi from '../../../Auxi/Auxi';
import BackDrop from '../../UI/BackDrop/BackDrop';
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.opened) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Auxi>
            <BackDrop show={props.opened} clicked={props.closed}/>
            
            <div className={attachedClasses.join(' ')}>
            

                <Logo height="11%" />
                <nav>
                    <Navigationlists />
                </nav>
            </div>

        </Auxi>

    )
}

export default sideDrawer;