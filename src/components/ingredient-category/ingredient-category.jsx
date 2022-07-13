import React from 'react';
import Ingredient from "../ingredient/ingredients";
import style from './ingredient-category.module.css'
import PropTypes from 'prop-types';
import ingredientType from "../../utils/ingredient-type";

function IngredientCategory({title, id, data, modalClick}) {
  return (
    <li className={`${style.list} mb-10`}>
      <h3 className='text text_type_main-medium mr-6 mb-6' id={id}>{title}</h3>
      <ul className={`${style.lists} ml-4`}>
        {data.map(data => (
            <Ingredient
              data={data}
              count={0}
              key={data._id}
              modalOpen={modalClick}
            />
          )
        )}
      </ul>
    </li>
  );
}

IngredientCategory.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.arrayOf(ingredientType).isRequired,
  modalClick: PropTypes.func.isRequired
}

export default IngredientCategory;
