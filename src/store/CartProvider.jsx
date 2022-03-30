import React, { useReducer } from 'react';
import CartContext from './CartContext';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = item => {
    dispatchCartAction({ type: ADD, item });
  };
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: REMOVE, id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
