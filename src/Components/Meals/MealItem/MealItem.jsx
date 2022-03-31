import React, { useContext } from 'react';

import classes from './MealItem.module.sass';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';

const MealItem = ({ id, name, description, price }) => {
  const context = useContext(CartContext);
  const itemPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = amount => {
    context.addItem({ id, name, amount, price });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{itemPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
