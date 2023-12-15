import { Footer, Navbar } from '@/layout'
import styles from './home.module.css'
import {
  AboutThat,
  CoursesOpen,
  DigitalMarkting,
  PricePlannig,
  ServicesIncluded,
  Slider,
  StartDigitalMarkting,
  StartElectronicEcommerce,
  WhyKambridage
} from '@/components'
// import { useState } from 'react'
import { GoldChart } from '@/pages'

const Home = () => {
  // const [loading, setLoading] = useState(false);
  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <div className={styles.root}>
        {/* <PdfToText /> */}
        <Navbar />
        <Slider />
        <GoldChart/>
        {/* <GoldCard/> */}
        <CoursesOpen />
        <StartElectronicEcommerce />
        <ServicesIncluded />
        {/* <DigitalMarkting /> */}
        {/* <StartDigitalMarkting /> */}
        <WhyKambridage />
        <AboutThat />
        <PricePlannig />
        <Footer />
      </div>
    </>
  )
}

export default Home
