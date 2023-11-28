import { Navbar } from '@/layout'
import styles from './home.module.css'
import { GoldCard, Slider } from '@/components'

const Home = () => {
  return (
    <div className={styles.root}>
      <Navbar/>
      <Slider/>
      <GoldCard/>
    </div>
  )
}

export default Home
