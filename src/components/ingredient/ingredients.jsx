import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredients.module.css'
import PropTypes from "prop-types";

function Ingredient({image, name, price, count}){
  return (
    <li className={`${style.list}`}>
      {
        count > 0 ? <Counter count={count} size='default'/> : ''
      }
      <img src={image} alt={name} className={`${style.img}`}/>
      <div className={`${style.price} mt-1 mb-1`}>
        <span className='text text_type_digits-default mr-2'>{price}</span>
        <CurrencyIcon type='primary'/>
      </div>
      <p className={`${style.name} text text_type_main-default`}>{name}</p>
    </li>
  );
}

Ingredient.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default Ingredient;
