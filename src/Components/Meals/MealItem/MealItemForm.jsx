import React, {useRef, useState} from 'react';

import { uniqueId } from 'lodash';
import classes from './MealItemForm.module.sass';
import Input from '../../UI/Input';

const MealItemForm = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: uniqueId('input'),
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
