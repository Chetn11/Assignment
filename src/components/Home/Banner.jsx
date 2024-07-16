import React from "react";
import styles from "./Banner.module.css";
import bannerImage from "../image/banner.png"

export default function Banner() {
  return (
    <div className={styles.ban_Container}>
      <div className={styles.firstHalf}>
        <div className={styles.heading}>
          <h1>Eliminate High Payment Gateway Charges!</h1>
        </div>
        <div className={styles.lab}>
          <p>Get your own white-label platform for payments & collection!</p>
          <h6>Go Live in Days!</h6>
        </div>
        <div className={styles.wrapper}>
          <input type="text" placeholder="Enter your email" />
          <button>GET START</button>
        </div>
      </div>
      <div className={styles.secondHalf}>
        <img src={bannerImage} alt="Banner Image" className={styles.bannerImage} />
      </div>
    </div>
  );
}
