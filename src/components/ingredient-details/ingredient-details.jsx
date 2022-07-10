import React from 'react';
import style from './ingredient-details.module.css';
import PropTypes from "prop-types";
import ingredientType from "../../utils/ingredient-type";

function IngredientDetails({data, key}) {
  return (
    <div className={`${style.details} mb-15`}>
      <img className='' src={data.image_large} alt={data.name} width='520px' height='240px'/>
      <h2 className="text text_type_main-medium mt-4">{data.name}</h2>
      <ul className={`${style.lists} mt-8`}>
        <li className="text_color_inactive mr-5">
          <h3 className="text text_type_main-default">Калории,ккал</h3>
          <p className="text text_type_digits-default mt-2">{data.calories}</p>
        </li>
        <li className="text_color_inactive mr-5">
          <h3 className="text text_type_main-default">Белки, г</h3>
          <p className="text text_type_digits-default mt-2">{data.proteins}</p>
        </li>
        <li className="text_color_inactive mr-5">
          <h3 className="text text_type_main-default">Жиры, г</h3>
          <p className="text text_type_digits-default mt-2">{data.fat}</p>
        </li>
        <li className="text_color_inactive">
          <h3 className="text text_type_main-default">Углеводы, г</h3>
          <p className="text text_type_digits-default mt-2">{data.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  key: PropTypes.any,
  data: PropTypes.objectOf(ingredientType).isRequired
}

export default IngredientDetails;
