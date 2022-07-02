import React, {useEffect, useState} from 'react';

import classes from './AvailableMeals.module.sass';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-food-order-app-39a41-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      );
      const responseData = await response.json();
      const loadedMeals = [];
      Object.keys(responseData).forEach(key => {
        loadedMeals.push({ id: key, ...responseData[key] });
      });
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map(meal => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
