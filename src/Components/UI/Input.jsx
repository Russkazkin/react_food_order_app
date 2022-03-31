import React, { forwardRef } from 'react';

import classes from './Input.module.sass';

const Input = (props, ref) => {
  const { label, input } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input} />
    </div>
  );
};

export default forwardRef(Input);
