import React from 'react';
import Container from '../../layout/index';
import classes from './Productpage.module.scss';

import { useParams } from 'react-router-dom';
import ModalForm from '../../components/ModalForm';
const ProductPage = ({ data }) => {
  const [modal, setModal] = React.useState(false);
  const { type } = useParams();
  console.log(data[type].title + ' ' + data[type].subtitle);

  return (
    <div className={classes['productPage']}>
      <Container>
        <div className={classes['productPage__inner']}>
          <div className={classes['productPage__item']}>
            <h2>
              {data[type].title} <span>{data[type].subtitle}</span>
            </h2>
            <p>{data[type].text}</p>
            <button onClick={() => setModal(true)} className={classes['productPage__btn']}>
              Buyurtma berish
            </button>
          </div>
          <div className={classes['productPage__img']}>
            <img src={data[type].image} alt="" />
          </div>
        </div>
      </Container>
      <ModalForm
        nameProduct={data[type].title + ' ' + data[type].subtitle}
        modal={modal}
        setModal={setModal}></ModalForm>
    </div>
  );
};

export default ProductPage;
