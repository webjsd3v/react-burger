import style from './app-header.module.css'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function AppHeader() {
  return (
    <header className={`${style.header} p-4`}>
      <nav className={style.nav}>
        <a className={`${style.link} ml-5 mr-2`} href='#constructor'>
          <BurgerIcon type={"primary"}/>
          <span className='text text_type_main-default ml-2 mr-5'>Конструктор</span>
        </a>
        <a className={`${style.link} ml-5`} href='#order_feed'>
          <ListIcon type={"secondary"}/>
          <span className='text text_type_main-default text_color_inactive ml-2 mr-5'>Лента заказов</span>
        </a>
        <a className={`${style.link} ${style.account}`} href='#personal_account'>
          <ProfileIcon type={"secondary"}/>
          <span className='text text_type_main-default text_color_inactive ml-2 mr-5'>Личный кабинет</span>
        </a>
        <a className={style.logo} href='/'>
          <Logo/>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader
