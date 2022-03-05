import React from 'react';

import classes from './Card.module.sass';

const Card = ({ children }) => <div className={classes.card}>{children}</div>;

export default Card;
