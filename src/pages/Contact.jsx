import React from 'react'
import FAQ from '../components/FAQ'
import styles from "./contactus.module.css"
import contact from "../components/image/contactus.png"
export default function Contact() {
  return (
    <div><div className={styles.ban_Container}>
      <div className={styles.firstHalf}>
        <div className={styles.heading}>
          <p>Contact Us</p>
          <h1>Feel free to get in touch with us.</h1>
        </div>
        <form>
          <input type='text'placeholder='Full Name'/>
          <input type='text' placeholder='Your Email Id'/>
          <input type='text' placeholder='Subject'/>
          <textarea type="text" placeholder='Enter Your Message'/>
          <button>Send</button>
        </form>
      </div>
      <div className={styles.secondHalf}>
        <img src={contact} alt="Banner Image" className={styles.bannerImage} />
      </div>
    </div><FAQ/></div>
  )
}
