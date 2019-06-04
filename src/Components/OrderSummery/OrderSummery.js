import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi/Auxi';
import Button from '../UI/Button/Button'

class OrderSummery extends Component {
    componentWillUpdate(){
        console.log("[OrderSummery] WillUpdate!");
        
    }
    render() {
        const ingredientsSummery = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{ transform: 'capitalize' }}>{igKey}:</span>
                        {this.props.ingredients[igKey]}
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
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue} >CONTINUE</Button>

            </Auxi>
        );
    }
}

export default OrderSummery;