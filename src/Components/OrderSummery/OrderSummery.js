import React from 'react';
import Auxi from '../../Auxi/Auxi';

const orderSummery = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{ transform: 'capitalize' }}>{igKey}:</span>
                    {props.ingredients[igKey]}
                </li>
            )
        });
    console.log(ingredientsSummery);

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummery}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxi>
    );
}

export default orderSummery;