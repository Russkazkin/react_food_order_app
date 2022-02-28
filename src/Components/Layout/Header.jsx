import React from 'react';

import classes from './Header.module.sass';
import mealsImage from '../../assets/images/meals.jpeg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="text-3xl font-bold">ReactMeals</h1>
        <button disabled>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
