import React from 'react';
import classes from './Model.module.css';

const model = (props) => {    
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    );
};
export default model;