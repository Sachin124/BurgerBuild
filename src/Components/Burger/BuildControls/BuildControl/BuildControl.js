import React from 'react';
import classes from './BuildControl.module.css';
const buildControl = (props) => {

    let buttons = null;
    if (!props.disabled) {
        buttons =  <button className={classes.More} onClick={props.added}>More</button>
     
    } else {
        buttons = <button className={classes.More} disabled={!props.disabled} onClick={props.added}>Add</button>
        
    }

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled} >Less</button>

           {buttons}
        </div>
    );
}
export default buildControl;

