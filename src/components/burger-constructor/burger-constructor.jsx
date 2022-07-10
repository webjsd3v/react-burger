import React from "react";
import {Button, ConstructorElement, DragIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-constructor.module.css'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import PropTypes from "prop-types";
import ingredientType from "../../utils/ingredient-type";


function BurgerConstructor({dataConstructor}) {
  const ingredientBun = dataConstructor.find(bun => bun.type === 'bun');
  const ingredients = dataConstructor.filter(item => item.type !== 'bun');
  const [open, setOpen] = React.useState(false)
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false)


  return (
    <>
      <section className={`${style.burger_constructor} mt-25`}>
        <div className={`mb-4 ml-8`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredientBun.name} (верх)`}
            price={ingredientBun.price}
            thumbnail={ingredientBun.image}
          />
        </div>
        <ul className={style.lists}>
          {ingredients.map(item => {
            return (
              <li className={`${style.list} mb-4 mr-2`} key={item.name}>
                <DragIcon type="primary"/>
                <div className={`ml-2`}>
                  <ConstructorElement
                    text={`${item.name}`}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </div>
              </li>
            )
          })}
        </ul>
        <div className={`mt-4 ml-8`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredientBun.name} (низ)`}
            price={ingredientBun.price}
            thumbnail={ingredientBun.image}
          />
        </div>
        <div className={`${style.price_button} mt-10 mr-4`}>
          <div className={`${style.price} mr-10`}>
            <span className="text mr-2">610</span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button type="primary" size="large" onClick={openModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {open && (
        <Modal onClose={closeModal} title=''>
          <OrderDetails/>
        </Modal>)
      }
    </>
  );
}

BurgerConstructor.propTypes = {
  dataConstructor: PropTypes.arrayOf(ingredientType).isRequired
}


export default BurgerConstructor
