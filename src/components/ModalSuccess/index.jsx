import React from 'react';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './ModalSuccess.module.scss';
import classNames from 'classnames';
const ModalSuccess = ({ modalSucces, setModalSucces }) => {
  return (
    <div
      className={
        modalSucces ? classNames(classes['wrapper'], classes['active']) : classes['wrapper']
      }>
      <div
        className={
          modalSucces ? classNames(classes['modal'], classes['active']) : classes['modal']
        }>
        <FontAwesomeIcon icon={faCircleCheck} className={classes['modal__icon']} />
        <h3 className={classes['modal__title']}>Muvaffaqiyatli yuborildi!</h3>
        <p className={classes['modal__text']}>
          Xabaringiz muvaffaqiyatli yuborildi, tez orada siz bilan bog'lanamiz.
          <br />
          <span>Bizni tanlaganingiz uchun raxmat!</span>
        </p>
        <button onClick={() => setModalSucces(false)} className={classes['modal__btn']}>
          Yopish
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
