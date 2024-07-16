import React from 'react'
import FAQ  from '../components/FAQ'
import styles from "./Home.module.css"
import Banner from '../components/Home/Banner'
export default function Home() {
  return (
    <div>
      <Banner/>
     <FAQ/>
    </div>
  )
}
