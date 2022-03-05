import React from 'react';

import classes from './MealItemForm.module.sass';

const MealItemForm = ({ item }) => {
  return (
    <form className={classes.form}>
      <input type="text" />
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
