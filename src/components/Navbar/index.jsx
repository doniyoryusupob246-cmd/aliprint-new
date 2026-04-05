import React from 'react';
import classes from './Navbar.module.scss';
import logo from '../../images/logo/logo.svg';
import Container from '../../layout/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
const Navbar = ({ poligrafiya, tashqiRekalama, aksessuarlar }) => {
  const [navMenu, setNavMenu] = React.useState(false);
  const [tashqiMenu, setTashqiMenu] = React.useState(false);
  const [poligrafiyaMenu, setPoligrafiyaMenu] = React.useState(false);
  const [aksessuarMenu, setAksessuarMenu] = React.useState(false);

  return (
    <Container>
      <nav className={classes['nav']}>
        <img className={classes['nav__logo']} src={logo} alt="" />
        <div
          className={
            navMenu
              ? classNames(classes['nav__list-wrapper'], classes['active'])
              : classes['nav__list-wrapper']
          }>
          <ul
            className={
              navMenu ? classNames(classes['nav__list'], classes['active']) : classes['nav__list']
            }>
            <FontAwesomeIcon
              onClick={() => setNavMenu(false)}
              icon={faClose}
              className={classes['nav__close']}
            />
            <li className={classes['nav__link']}>
              <a
                className={classes['nav__link-a']}
                href="#!"
                onMouseEnter={() => setPoligrafiyaMenu(true)}
                onMouseLeave={() => setPoligrafiyaMenu(false)}>
                <span>
                  POLIGRAFIYA
                  <FontAwesomeIcon className={classes['nav__link-icon']} icon={faChevronDown} />
                </span>
                <ul
                  className={
                    poligrafiyaMenu
                      ? classNames(classes['nav__dropdown'], classes['active'])
                      : classes['nav__dropdown']
                  }>
                  {poligrafiya.map((link) => (
                    <Link className={classes['nav__dropdown-link']} key={link.url} to={link.url}>
                      <li>
                        {link.title} <span>{link.subtitle}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </a>
            </li>
            <li className={classes['nav__link']}>
              <a
                className={classes['nav__link-a']}
                href="#!"
                onMouseEnter={() => setTashqiMenu(true)}
                onMouseLeave={() => setTashqiMenu(false)}>
                <span>
                  TASHQI REKLAMA
                  <FontAwesomeIcon className={classes['nav__link-icon']} icon={faChevronDown} />
                </span>
                <ul
                  className={
                    tashqiMenu
                      ? classNames(classes['nav__dropdown'], classes['active'])
                      : classes['nav__dropdown']
                  }>
                  {tashqiRekalama.map((link) => (
                    <Link className={classes['nav__dropdown-link']} key={link.url} to={link.url}>
                      <li>
                        {link.title} <span>{link.subtitle}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </a>
            </li>
            <li className={classes['nav__link']}>
              <a
                className={classes['nav__link-a']}
                href="#!"
                onMouseEnter={() => setAksessuarMenu(true)}
                onMouseLeave={() => setAksessuarMenu(false)}>
                <span>
                  Aksessuarlar
                  <FontAwesomeIcon className={classes['nav__link-icon']} icon={faChevronDown} />
                </span>
                <ul
                  className={
                    aksessuarMenu
                      ? classNames(classes['nav__dropdown'], classes['active'])
                      : classes['nav__dropdown']
                  }>
                  {aksessuarlar.map((link) => (
                    <Link className={classes['nav__dropdown-link']} key={link.url} to={link.url}>
                      <li>
                        {link.title} <span>{link.subtitle}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </a>
            </li>
            <li className={classes['nav__link']}>
              <a className={classes['nav__link-a']} href="#hamkorlar">
                Hamkorlar
              </a>
            </li>
          </ul>
        </div>
        <div className={classes['nav__social']}>
          <a
            target="_blank"
            href="https://www.instagram.com/aliprint_official?igsh=MTB5dThpMnByMmpiaA==" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a target="_blank" href="https://t.me/Aliprint_official" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
        <FontAwesomeIcon
          onClick={() => setNavMenu(true)}
          className={classes['nav__burger']}
          icon={faBars}
        />
      </nav>
    </Container>
  );
};

export default Navbar;
