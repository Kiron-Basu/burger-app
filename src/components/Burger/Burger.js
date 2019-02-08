import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    console.log('props =  ' + props);
    console.log('transformedIngredients (Object.keys) =  ' + Object.keys(props.ingredients));
const transformedIngredients = Object.keys(props.ingredients) //get array of keys (not values)
.map(ingrtKey => { //for each key, do this..
    console.log('current ingrtKey =   ' + ingrtKey)
    console.log('props.ingredients[ingrtKey] =  '  + props.ingredients[ingrtKey])
    console.log('Array from keys =   ' + [...Array(props.ingredients[ingrtKey])])
    return [...Array(props.ingredients[ingrtKey])].map((_, index) => { //get an array equal to value of each key e.g
        //if salad: 3, then Array(3) = 3 empty slots, as Array(arg) creates 3 empty array items
        // the spread operator (inside braces) then spreads these empty array items into an actual array hence creating an array
        //which has the same dimensions as the digit property value. The next map returns an underscore inplace of each undefined item
        //e.g. salad:3 = Array(3) = 3 x [empty slots] --> spread --> [undefined, undefined, undefined] --> map [_,_,_]
        //for each of these _'s, a BurgerIngredient is created with the type of ingrtKey
        //the pupose of the 1st map is to iterate over each key/value pair and return a array with the same number of (blank/undefined)
        //items as the numerical value fo each key/value pair
        // The purpose of the second map is to iterate over each item in the newly generated array and return a component per array item 
        // the underscore is a dummy value which fulfills the map parameter requirements and allows consequent iteration
        return <BurgerIngredient key={ingrtKey + index} type={ingrtKey}/>
    });
});

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;