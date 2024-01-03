import { Footer, Header, Navbar } from '@/layout'

import {
  AboutThat,
  CoursesOpen,
  DigitalMarkting,
  GoldCard,
  PricePlannig,
  ServicesIncluded,
  StartElectronicEcommerce,
  WhyKambridage
} from '@/components'
import { useState } from 'react'
import { GoldChart } from '@/pages'

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <div className="loading"></div>}
      <div>
        {/* <PdfToText /> */}
        <Navbar />
        <Header />
        <GoldChart />
        {/* category gold */}
        <CoursesOpen />
        {/* investment */}
        <GoldCard />
        {/* videos */}
        <DigitalMarkting />
        <StartElectronicEcommerce />
        <ServicesIncluded />
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
