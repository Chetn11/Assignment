import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      <footer>
        <div className={styles.container}>
          <div className={styles.about}>
            <h1>ShulkPay</h1>
            <h2>About US</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              totam nihil quidem. Quam laudantium, veritatis maiores vitae
              explicabo aliquam possimus alias iste veniam aut est inventore iusto
              doloremque impedit nulla.
            </p>
            <ul className={styles.social}>
              <li><a href="#"><FaFacebook style={{ fontSize: "30", color: "blue" }} /></a></li>
              <li><a href="#"><FaXTwitter style={{ fontSize: "30", color: "black" }} /></a></li>
              <li><a href="#"><FaYoutube style={{ fontSize: "30", color: "red" }} /></a></li>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <h2>MAIN</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <h2>PRODUCTS</h2>
            <ul>
              <li><a href="#">Payment Page</a></li>
              <li><a href="#">Payment Links</a></li>
              <li><a href="#">Payment Gateway</a></li>
              <li><a href="#">Payouts</a></li>
              <li><a href="#">UPI AutoPay</a></li>
              <li><a href="#">Bill Payment</a></li>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <h2>LEGAL</h2>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund & Cancellation</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>© 2023 K2VS Finance and Investment Private Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
