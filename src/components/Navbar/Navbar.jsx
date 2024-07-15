import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
export const Navbar = () => {

  const[isMobile,setIsMobile]=useState(false);
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>ShulkPay</h3>
      <ul className={isMobile?styles.nav_mob_links:styles.nav_links}
      onClick={()=>setIsMobile(false)}>
      <Link to="/" className={styles.home}>
      <li>Home</li></Link>
        <Link to="/products" className={styles.product}>
        <li>Products</li></Link>
        <Link to="/pricing" className={styles.price}>
        <li>Pricing</li></Link>
        <Link to="/contact-us" className={styles.contact}>
        <li>Contact US</li></Link>
      </ul>
      <button className={styles.menu_icon} onClick={()=>setIsMobile(!isMobile)}>{isMobile?<FaTimes/> :<IoMenu/>}</button>
      
    </nav>
  )
}
