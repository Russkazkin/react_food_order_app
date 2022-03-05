import React from 'react';

import classes from './Input.module.sass';

const Input = (props) => {
  const { label, input } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} {...input} />
    </div>
  );
};

export default Input;
