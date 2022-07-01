import React from 'react';
import style from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <>
      <AppHeader/>
      <main className={`${style.content}`}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </>
  );
}

export default App;
