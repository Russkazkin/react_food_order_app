import React, { useContext } from 'react';
import { isEmpty } from 'lodash';
import classes from './Cart.module.sass';
import Modal from '../UI/Modal';
import cartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = ({ onCloseCart }) => {
  const context = useContext(cartContext);
  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const hasItems = !isEmpty(context.items);
  const cartItemAddHandler = item => {
    context.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = id => {};
  const cartItems = (
    <ul className={classes['cart-items']}>
      {context.items.map(cartItem => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          amount={cartItem.amount}
          price={cartItem.price}
          onAdd={() => cartItemAddHandler(cartItem)}
          onRemove={() => cartItemRemoveHandler(cartItem.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>TotalAmount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCloseCart} className={classes['button--alt']} type="button">
          Close
        </button>
        {hasItems && (
          <button className={classes.button} type="button">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
