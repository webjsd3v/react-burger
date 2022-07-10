import React from "react";
import PropTypes from "prop-types";
import style from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from "../ingredient-category/ingredient-category";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ingredientType from "../../utils/ingredient-type";

function BurgerIngredients({dataIngredients}) {
  const [tabClick, setTabClick] = React.useState('buns');
  const [open, setOpen] = React.useState(null);
  const modalClose = () => setOpen(null)
  const ingredientBuns = React.useMemo(() => dataIngredients.filter(item => item.type === 'bun'), [dataIngredients]);
  const ingredientSauces = React.useMemo(() => dataIngredients.filter(item => item.type === 'sauce'), [dataIngredients]);
  const ingredientMains = React.useMemo(() => dataIngredients.filter(item => item.type === 'main'), [dataIngredients]);

  return (
    <>
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
            data={ingredientBuns}
            modalClick={setOpen}
          />
          <IngredientCategory
            title='Соусы'
            id='sauces'
            data={ingredientSauces}
            modalClick={setOpen}
          />
          <IngredientCategory
            title='Начинки'
            id='mains'
            data={ingredientMains}
            modalClick={setOpen}
          />
        </ul>
      </section>
      {open && (
          <Modal title='Детали инградиента' onClose={modalClose}>
            <IngredientDetails data={open}/>
          </Modal>
        )
      }
    </>
  )
}

BurgerIngredients.propTypes = {
  dataIngredients: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerIngredients
