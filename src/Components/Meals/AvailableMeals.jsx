import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.sass';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-food-order-app-39a41-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedMeals = [];
      Object.keys(responseData).forEach(key => {
        loadedMeals.push({ id: key, ...responseData[key] });
      });
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch(e => {
      setIsLoading(false);
      setHttpError(e.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
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
