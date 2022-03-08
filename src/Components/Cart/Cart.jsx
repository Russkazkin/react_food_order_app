import React from 'react';

import classes from './Cart.module.sass';

const Cart = ({ item }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((cartItem) => (
        <li key={cartItem.id}>{cartItem.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>TotalAmount:</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} type="button">
          Close
        </button>
        <button className={classes.button} type="button">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
