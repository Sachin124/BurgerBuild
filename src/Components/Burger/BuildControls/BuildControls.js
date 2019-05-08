import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import Auxi from '../../../Auxi/Auxi';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const buildControls = (props) => {
    return (
        <Auxi>
            <div className={classes.BuildControls}>
                <div>Current Price: <strong> {props.totalPrice.toFixed(2)}</strong></div>
                {controls.map(ctrl => (
                    <BuildControl key={ctrl.label}
                        type={ctrl.type}
                        label={ctrl.label} 
                        added={() => props.ingredientAdded(ctrl.type)} 
                        removed={()=> props.ingredientRemoved(ctrl.type)} 
                        disabled={props.disabledInfo[ctrl.type]}/>
                ))}
                    <button className={classes.OrderButton}
                    disabled={!props.pirchaseable}>ORDER NOW</button>
            </div>
        </Auxi>
    )



}
export default buildControls;