import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './ProductSlider.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import classNames from 'classnames';
import ModalForm from '../ModalForm';

const ProductSlider = ({ className, dataProduct }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modal, setModal] = React.useState(false);
  const [productName, setProductName] = React.useState('');
  const clickBtn = (data, subData) => {
    setModal(true);
    setProductName(data, subData);
  };

  return (
    <div>
      <Swiper
        breakpoints={{
          1123: {
            slidesPerView: 8,
          },
        }}
        onSwiper={setThumbsSwiper}
        navigation={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={dataProduct.length - 1}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={classNames(classes['mySwiper'], className)}>
        {dataProduct.map((data) => (
          <SwiperSlide key={data.image} className={classes['productSlider__nav']}>
            {data.title}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
        {dataProduct.map((data) => (
          <SwiperSlide key={data.image} className={classes['productSlider__inner']}>
            <div className={classes['productSlider__item']}>
              <div className={classes['productSlider__item-info']}>
                <h3 className={classes['productSlider__item-title']}>
                  {data.title} <span>{data.subtitle}</span>
                </h3>
                <p className={classes['productSlider__item-text']}>{data.text}</p>
                <button
                  onClick={() => clickBtn(data.title + ' ' + data.subtitle)}
                  className={classes['productSlider__item-btn']}>
                  Buyurtma berish
                </button>
              </div>
              <div className={classes['productSlider__item-img']}>
                <img src={data.image} alt="" />
                <button
                  onClick={() => clickBtn(data.title)}
                  className={classes['productSlider__item-img-btn']}>
                  Buyurtma berish
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalForm
        setProductName={setProductName}
        nameProduct={productName}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
};

export default ProductSlider;
