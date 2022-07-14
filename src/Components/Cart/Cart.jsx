import React, { useContext, useState } from 'react';
import { isEmpty } from 'lodash';
import classes from './Cart.module.sass';
import Modal from '../UI/Modal';
import cartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ onCloseCart }) => {
  const context = useContext(cartContext);
  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const hasItems = !isEmpty(context.items);
  const [isCheckout, setIsCheckout] = useState(false);
  const cartItemAddHandler = item => {
    context.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = id => {
    context.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
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
  const modalActions = (
    <div className={classes.actions}>
      <button onClick={onCloseCart} className={classes['button--alt']} type="button">
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button} type="button">
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>TotalAmount:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={onCloseCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
