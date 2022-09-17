import React, { useReducer } from 'react';
import CartContext from './CartContext';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CLEAR = 'CLEAR';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case REMOVE:
      const existingItemIndex = state.items.findIndex(item => item.id === action.id);
      const existingItem = state.items[existingItemIndex];
      const updatedAmount = state.totalAmount - existingItem.price;
      let updatedCart;
      if (existingItem.amount === 1) {
        updatedCart = state.items.filter(item => item.id !== existingItem.id);
      } else {
        const updatedExistingItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedCart = [...state.items];
        updatedCart[existingItemIndex] = updatedExistingItem;
      }
      return { items: updatedCart, totalAmount: updatedAmount };
    case CLEAR:
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
  const clearCartHandler = () => {
    dispatchCartAction({ type: CLEAR });
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
