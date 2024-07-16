import React, { useState } from 'react';
import styles from './Price.module.css';

const Price = () => {
    const[toggle,setToggle]=useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Flexible Plans.</h2>
        <p className={styles.para}>We offer reasonable and flexible plans tailored to your needs. We offer budget-friendly options with adaptable features. Discover the perfect solution today!</p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={()=>setToggle(!toggle)} disabled={toggle===false}>Subscription</button>
          <button className={styles.button}onClick={()=>setToggle(!toggle)} disabled={toggle===true}>Per Txn</button>
        </div>
      </div>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <div className={styles.price}>
            <span className={styles.amount}>{toggle?"0.10%":"2999"}</span>
            <span className={styles.month}>{toggle?"/ txn":"/ month"} </span>
          </div>
          <p className={styles.description}>For Education Institutes, Colleges etc.</p>
          <ul className={styles.features}>
            <li className={styles.feature}>Payment Links</li>
            <li className={styles.feature}>Payment Gateway</li>
            <li className={styles.feature}>White Label Platform</li>
            <li className={styles.feature}>Bill Payment</li>
          </ul>
          <button className={styles.button} onClick={() => console.log('Buy Now button clicked')}>Buy Now</button>
        </div>
        <div className={styles.plan}>
          <div className={styles.price}>
            <span className={styles.amount}>{toggle?"1.00%":"5999"}</span>
            <span className={styles.month}>{toggle?"/ txn":"/ month"}</span>
          </div>
          <p className={styles.description}>Other Categories*</p>
          <ul className={styles.features}>
            <li className={styles.feature}>Payment Page</li>
            <li className={styles.feature}>Payment Links</li>
            <li className={styles.feature}>Payment Gateway</li>
            <li className={styles.feature}>Bill Payment</li>
            <li className={styles.feature}>Mobile App/SDK</li>
            <li className={styles.feature}>APIs</li>
            <li className={styles.feature}>White Label Platform</li>
          </ul>
          <button className={styles.button} onClick={() => console.log('Buy Now button clicked')}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Price;