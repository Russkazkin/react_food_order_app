import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.sass';
import CartContext from '../../store/CartContext';

const HeaderCartButton = ({ onClick }) => {
  const context = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  useEffect(() => {
    if (context.items.length === 0) return;
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [context.items]);
  const numberOfCartItems = context.items.reduce((currentNumber, item) => currentNumber + item.amount, 0);
  const buttonClasses = `${classes.button} ${buttonIsHighlighted && classes.bump}`;
  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
