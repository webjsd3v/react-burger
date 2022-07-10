import React from 'react';
import style from './modal-overlay.module.css'
import PropTypes from "prop-types";

function ModalOverlay({onClose}){
  return (
    <div className={style.overlay} onClick={onClose}></div>
  );
}

ModalOverlay.propType = {
  onClose: PropTypes.func.isRequired
}

export default ModalOverlay;
