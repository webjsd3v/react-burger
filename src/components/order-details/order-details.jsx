import React from 'react';
import style from  './order-details.module.css'
import img from '../../images/ingredient-details/ingredient-detals-done.svg'

function OrderDetails() {
  return (
    <div className={`${style.details} mt-5 mb-30`}>
      <span className={`${style.title} text text_type_digits-large`}>034536</span>
      <h2 className="text text_type_main-medium mt-8">идентификатор заказа</h2>
      <img className="mt-15" src={img} alt="done" width='120px' height='120px'/>
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default mt-2 text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
