import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Footer,
  Header,
  Navbar
} from '@/layout'
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
import { GoldChart } from '@/pages'
import { getCookie } from 'cookies-next'
const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <div className="loading"></div>}
      <div>
        {/* <PdfToText /> */}
        <Navbar />
        <Header />
        {/* <GoldChart /> */}
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
      {getCookie('role') == 'admin' || getCookie('role') == 'manager' ? (
        <Link className="editIcon" to="/dash/dashboard">
          D
        </Link>
      ) : null}
    </>
  )
}

export default Home
