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
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri";
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
      { getCookie('role') == 'admin' && getCookie('role') == 'manager' ? (
        <Link to="/dash/dashboard">
          <RiDashboardFill
            className="editIcon"
            style={{
              bottom: '1rem',
            }}
          />
        </Link>
      ) : null}
    </>
  )
}

export default Home
