import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './modal.module.css'
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal({title ,children, onClose}){
  useEffect(() => {
    const handleEsc = (event) => {
      if(event.key === 'Escape'){
        onClose()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return ReactDOM.createPortal (
    <>
      <div className={style.popup}>
        <div className={`${style.title}  ml-10 mr-10 mt-10`}>
          <button className={`${style.button} mt-5`} type='button'>
            <CloseIcon type="primary" onClick={onClose}/>
          </button>
          <h1 className="text text_type_main-large">{title}</h1>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose}/>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;
