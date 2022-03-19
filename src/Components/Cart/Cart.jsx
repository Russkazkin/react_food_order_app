import React from 'react';

import classes from './Cart.module.sass';
import Modal from '../UI/Modal';

const Cart = ({ onCloseCart }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((cartItem) => (
        <li key={cartItem.id}>{cartItem.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>TotalAmount:</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCloseCart} className={classes['button--alt']} type="button">
          Close
        </button>
        <button className={classes.button} type="button">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
