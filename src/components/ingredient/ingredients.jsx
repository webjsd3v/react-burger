import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredients.module.css'
import PropTypes from "prop-types";
import ingredientType from "../../utils/ingredient-type";

function Ingredient({data, count, modalOpen}){
   const click = () => {
     modalOpen(data)
   }

  return (
    <>
      <li className={`${style.list}`} onClick={click}>
        {
          count > 0 ? <Counter count={count} size='default'/> : ''
        }
        <img src={data.image} alt={data.name} className={`${style.img}`}/>
        <div className={`${style.price} mt-1 mb-1`}>
          <span className='text text_type_digits-default mr-2'>{data.price}</span>
          <CurrencyIcon type='primary'/>
        </div>
        <p className={`${style.name} text text_type_main-default`}>{data.name}</p>
      </li>
    </>
  );
}


Ingredient.propTypes = {
  data: PropTypes.any.isRequired,
  count: PropTypes.number,
  modalOpen: PropTypes.func.isRequired
}

export default Ingredient;
