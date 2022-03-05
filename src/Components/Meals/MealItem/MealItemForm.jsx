import React from 'react';

import { uniqueId } from 'lodash';
import classes from './MealItemForm.module.sass';
import Input from '../../UI/Input';

const MealItemForm = ({ item }) => {
  return (
    <form className={classes.form}>
      <Input
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
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
