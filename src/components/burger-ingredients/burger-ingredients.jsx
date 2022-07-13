import React from "react";
import style from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import IngredientCategory from "../ingredient-category/ingredient-category";

function BurgerIngredients() {
  const [tabClick, setTabClick] = React.useState('buns')
  return (
    <section className='mt-10'>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <nav className={`${style.nav} mb-10`}>
        <Tab value="buns" active={tabClick === 'buns'} onClick={setTabClick}>
          Булки
        </Tab>
        <Tab value="sauces" active={tabClick === 'sauces'} onClick={setTabClick}>
          Соусы
        </Tab>
        <Tab value="mains" active={tabClick === 'mains'} onClick={setTabClick}>
          Начинки
        </Tab>
      </nav>
      <ul className={`${style.lists}`}>
        <IngredientCategory
          title='Булки'
          id='buns'
          data={data.filter(item => item.type === 'bun')}
        />
        <IngredientCategory
          title='Соусы'
          id='sauces'
          data={data.filter(item => item.type === 'sauce')}
        />
        <IngredientCategory
          title='Начинки'
          id='mains'
          data={data.filter(item => item.type === 'main')}/>
      </ul>
    </section>
  )
}

export default BurgerIngredients
