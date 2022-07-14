import React from 'react';
import classes from './Checkout.module.sass';

const Checkout = ({ onCancel }) => {
  const confirmHandler = event => {
    event.preventDefault();
  };
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input id="street" name="street" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" name="postal" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" name="city" type="text" />
      </div>
      <button onClick={onCancel} type="button">Cancel</button>
      <button onClick={confirmHandler} type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
