import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobile(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} ><h3 className={styles.logo}>ShulkPay</h3></Link>
      <ul className={isMobile ? styles.nav_mob_links : styles.nav_links}>
        <li>
          <Link to="/" className={`${styles.link} ${activeLink === '/' ? styles.active : ''}`} onClick={() => handleLinkClick('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className={`${styles.link} ${activeLink === '/products' ? styles.active : ''}`} onClick={() => handleLinkClick('/products')}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/pricing" className={`${styles.link} ${activeLink === '/pricing' ? styles.active : ''}`} onClick={() => handleLinkClick('/pricing')}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className={`${styles.link} ${activeLink === '/contact-us' ? styles.active : ''}`} onClick={() => handleLinkClick('/contact-us')}>
            Contact Us
          </Link>
        </li>
      </ul>
      <button className={styles.menu_icon} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <IoMenu />}
      </button>
    </nav>
  );
};
