import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
          <li className="app__flex p-text">
            <a href="/" className="navbar__link">
              Accueil
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#about" className="navbar__link">
              A Propos
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#work" className="navbar__link">
              Mes Créations
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#skills" className="navbar__link">
              Compétences
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#contact" className="navbar__link">
              Contact
            </a>
          </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
      <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
      <ul className="app__navbar-links">
          <li className="app__flex p-text">
            <a href="/" className="navbar__link">
              Accueil
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#about" className="navbar__link">
              A Propos
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#work" className="navbar__link">
              Mes Créations
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#skills" className="navbar__link">
              Compétences
            </a>
          </li>
          <li className="app__flex p-text">
            <a href="#contact" className="navbar__link">
              Contact
            </a>
          </li>
      </ul>
      </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;