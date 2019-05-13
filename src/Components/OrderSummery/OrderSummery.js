import React from 'react';
import Auxi from '../../Auxi/Auxi';
import Button from '../UI/Button/Button'
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success"  clicked={props.purchaseContinue} >CONTINUE</Button>

        </Auxi>
    );
}

export default orderSummery;