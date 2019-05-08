import React, { Component } from 'react';
import Auxi from '../../Auxi/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Model from '../../Components/UI/Model/Model';
import OrderSummery from '../../Components/OrderSummery/OrderSummery';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.3,
    meat: 0.2
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        pirchaseable: false
    }

    updatePurchaseState(ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0 })
    }

    addIngredients = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }



    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            debugger
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxi>
                <Model>
                    <OrderSummery ingredients={this.state.ingredients} />
                </Model>


                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredients}
                    ingredientRemoved={this.removeIngredients}
                    totalPrice={this.state.totalPrice}
                    disabledInfo={disabledInfo}
                    pirchaseable={this.state.purchasable} />
            </Auxi>
        );
    }

}

export default BurgerBuilder;