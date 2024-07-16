import React from 'react'
import styles from "./Feature.module.css"
import { AiTwotoneBank } from 'react-icons/ai';
import { MdOutlineRequestPage,MdFlashAuto } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";
import { SiAmazonapigateway } from "react-icons/si";
import { FaRegMoneyBill1 } from "react-icons/fa6";

function Feature() {
  return (
    <div className={styles.features_container}>
      <h2 className={styles.features_title}>ShulkPay Products.</h2>
      <p className={styles.features_subtitle}>ShulkPay offer various products which is being offered by traditional payment gateways but directly with Bank</p>
      <div className={styles.features_grid}>
        <div className={styles.feature}>
          <div className={styles.feature_icon}><MdOutlineRequestPage/></div>
          <h3 className={styles.feature_title}>Payment Page</h3>
          <p className={styles.feature_description}>Secure online payment page for collection through website.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_icon}><RiLinksFill/></div>
          <h3 className={styles.feature_title}>Payment Links</h3>
          <p className={styles.feature_description}>Shareable Links for quick payments through SMS, Email or WhatsApp.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_icon}><SiAmazonapigateway/></div>
          <h3 className={styles.feature_title}>Payment Gateway</h3>
          <p className={styles.feature_description}>Efficient ICICI EazyPay Payment Gateway to offer multiple payment modes.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_icon}><AiTwotoneBank/></div>
          <h3 className={styles.feature_title}>Payouts</h3>
          <p className={styles.feature_description}>For payments and refunds to customers & vendors.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_icon}><MdFlashAuto/></div>
          <h3 className={styles.feature_title}>UPI AutoPay</h3>
          <p className={styles.feature_description}>UPI AutoPay for recurring collections.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_icon}><FaRegMoneyBill1/></div>
          <h3 className={styles.feature_title}>Bill Payment</h3>
          <p className={styles.feature_description}>Pay your bills using ShulkPay.</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
