import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.faq}>
          <h4>FAQS</h4>
          <h1>You have Questions ?</h1>
          <p>
            If your query isn’t listed below, you can directly reach out to us on
          </p>
          <p className={styles.email}>support@shulkpay.com</p>
        </div>
        <div className={styles.accordion}>
          {accordionData.map((item, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.title} onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? styles.contentShow : styles.contentHide}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is based on various factors, including the product or service you are interested in, any customization or additional features you may require, and current market rates. Prices are listed on our website or provided upon request. We strive to offer competitive and transparent pricing to ensure our customers receive fair value for their business.",
  },
  {
    question: "Are there any hidden charges or fees?",
    answer:
      "We strive to be transparent with our pricing, and we do not have any hidden fees or charges. However, it’s always recommended to review the terms and conditions or pricing details of any product or service you are interested in to ensure you have a clear understanding of the costs involved.",
  },
  {
    question: "Can I request a custom pricing package?",
    answer:
      "Yes, for certain products or services, we may offer custom pricing packages based on your specific requirements. Please contact our sales team or customer support to discuss your needs and explore possible custom pricing options.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes, we periodically offer discounts and promotions. These may be seasonal, promotional, or based on specific events or customer loyalty. Please check our website or contact our customer support for current discounts or promotions that may apply to your purchase.",
  },
  {
    question: "Do you offer refunds or price adjustments?",
    answer:
      "Refunds and price adjustments may be considered on a case-by-case basis. Please refer to our refund policy or contact our customer support for more information on our refund or price adjustment processes.",
  },
];

export default FAQ;
