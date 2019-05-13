import React from 'react';
import classes from './Model.module.css';
import Auxi from '../../../Auxi/Auxi';
import BackDrop from '../BackDrop/BackDrop';

const model = (props) => {
    return (
        <Auxi>
            <BackDrop show={props.show} clicked={props.modelClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? ' translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxi>
    );
};
export default model;