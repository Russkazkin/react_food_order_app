import React from 'react';

import classes from './Header.module.sass';
import mealsImage from '../../assets/images/meals.jpeg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="text-3xl font-bold">ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
