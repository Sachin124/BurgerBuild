import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {/* <BurgerIngredients type="bread-top" /> */}
            {/* <BurgerIngredients type="cheese" />
                <BurgerIngredients type="meat" /> */}
            {transformIngredients}
            <BurgerIngredients type="bread-bottom" />

        </div>
    );
}

export default burger;