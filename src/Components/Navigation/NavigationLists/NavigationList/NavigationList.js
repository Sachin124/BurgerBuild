import React from 'react';
import classes from './NavigationList.module.css';
const navigationList = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.childrens} className={props.active ? classes.active: null}>{props.children}</a>
    </li>
)

export default navigationList;