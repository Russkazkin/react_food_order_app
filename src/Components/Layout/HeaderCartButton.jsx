import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.sass';
import CartContext from '../../store/CartContext';

const HeaderCartButton = ({ onClick }) => {
  const context = useContext(CartContext);
  const numberOfCartItems = context.items.reduce((currentNumber, item) => currentNumber + item.amount, 0);
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
