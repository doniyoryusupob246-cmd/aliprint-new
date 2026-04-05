import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Title from '../Title';
import Container from '../../layout/';
import partners from '../../data/partners';
import classes from './Partners.module.scss';

import { Pagination, Autoplay } from 'swiper/modules';
const Partners = () => {
  return (
    <div id="hamkorlar">
      <Title>Bizning Mijozlar</Title>
      <Container>
        <div className={classes['partners']}>
          <div className={classes['partners__inner']}>
            <Swiper
              breakpoints={{
                939: {
                  slidesPerView: 4,
                },
                696: {
                  slidesPerView: 3,
                },
                401: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="partners__slider">
              {partners.map((images) => (
                <SwiperSlide key={images.image}>
                  <div className={classes['partners__item']}>
                    <img src={images.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
