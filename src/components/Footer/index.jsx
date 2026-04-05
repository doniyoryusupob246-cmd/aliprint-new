import React from 'react';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../layout';
import classes from './Footer.module.scss';
import footerLogo from '../../images/logo/footer_logo.png';
const Footer = () => {
  return (
    <div>
      <div className={classes['footer']}>
        <Container>
          <div className={classes['footer__inner']}>
            <img className={classes['footer__logo']} src={footerLogo} alt="" />
            <p className={classes['footer__text']}>
              "Aliprint" kompaniyasi tashqi reklama va poligrafiya mahsulotlari ishlab chiqarish
              bozorining yetakchisi. Biz yuqori sifatli reklama konstruktsiyalari va poligrafiya
              mahsulotlarini ishlab chiqish va ishlab chiqarishni taklif qilamiz.
            </p>
            <div className={classes['footer__social']}>
              <a href="https://www.instagram.com/aliprint_official?igsh=MTB5dThpMnByMmpiaA==">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://t.me/Aliprint_official">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
            <a className={classes['footer__phone']} href="tel:+998910990999">+998 91 099 09 99</a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
