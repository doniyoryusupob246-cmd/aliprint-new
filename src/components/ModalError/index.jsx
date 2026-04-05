import React from 'react';

import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './ModalError.module.scss';
import classNames from 'classnames';
const ModalSuccess = ({ modalError, setModalError }) => {
  return (
    <div
      className={
        modalError ? classNames(classes['wrapper'], classes['active']) : classes['wrapper']
      }>
      <div
        className={modalError ? classNames(classes['modal'], classes['active']) : classes['modal']}>
        <FontAwesomeIcon icon={faXmarkCircle} className={classes['modal__icon']} />
        <h3 className={classes['modal__title']}>Xato! Xabar yuborilmadi</h3>
        <p className={classes['modal__text']}>
          Hech qanday xabar yuborilmadi. Xato ro'y berdi. Qayta urinib ko'ring.
          <br />
        </p>
        <button onClick={() => setModalError(false)} className={classes['modal__btn']}>
          Yopish
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
