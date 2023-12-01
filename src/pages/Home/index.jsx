import { Footer } from '@/layout'
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

const Home = () => {
  return (
    <div className={styles.root}>
      <Slider />
      {/* <GoldCard/> */}
      <CoursesOpen />
      <StartElectronicEcommerce />
      <ServicesIncluded />
      <DigitalMarkting />
      <StartDigitalMarkting />
      <WhyKambridage />
      <AboutThat />
      <PricePlannig />
      <Footer />
    </div>
  )
}

export default Home
