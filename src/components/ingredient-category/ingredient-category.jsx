import React from 'react';
import Ingredient from "../ingredient/ingredients";
import style from './ingredient-category.module.css'

function IngredientCategory({title, id, data}){
  return (
    <li className={`${style.list} mb-10`}>
      <h3 className='text text_type_main-medium mr-6 mb-6' id={id}>{title}</h3>
      <ul className={`${style.lists} ml-4`}>
        {data.map(item => <Ingredient name={item.name} price={item.price} image={item.image} count={''} key={item.name}/>)}
      </ul>
    </li>
  );
}

export default IngredientCategory;
