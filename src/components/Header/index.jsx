import React from 'react';
import classes from './Header.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Header = () => {
  return (
    <header className={classes['header']}>
      <Swiper
        pagination={{ clickable: true }}
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className={classes['mySwiper']}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/1.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/2.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/3.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/4.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/5.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/6.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/7.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className={classes['swiperSlide']}> <img src="./header/8.jpg" alt="" /> </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
