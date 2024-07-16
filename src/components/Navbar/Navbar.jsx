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
      <h3 className={styles.logo}>ShulkPay</h3>
      <ul
        className={isMobile ? styles.nav_mob_links : styles.nav_links}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className={`${styles.link} ${activeLink === '/' ? styles.active : ''}`} onClick={() => handleLinkClick('/')}>
          <li>Home</li>
        </Link>
        <Link to="/products" className={`${styles.link} ${activeLink === '/products' ? styles.active : ''}`} onClick={() => handleLinkClick('/products')}>
          <li>Products</li>
        </Link>
        <Link to="/pricing" className={`${styles.link} ${activeLink === '/pricing' ? styles.active : ''}`} onClick={() => handleLinkClick('/pricing')}>
          <li>Pricing</li>
        </Link>
        <Link to="/contact-us" className={`${styles.link} ${activeLink === '/contact-us' ? styles.active : ''}`} onClick={() => handleLinkClick('/contact-us')}>
          <li>Contact US</li>
        </Link>
      </ul>
      <button className={styles.menu_icon} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <IoMenu />}
      </button>
    </nav>
  );
};
