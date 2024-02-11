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
  WhyKambridage,
  // GoldChart
} from '@/components'
import { useAuth } from '@/context/Auth'
import { GoldChart } from '@/pages'
const Home = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();  
  return (
    <>
      {loading && <div className="loading"></div>}
      <div>
        {/* <PdfToText /> */}
        <Navbar />
        <Header />
        <GoldChart />
        {/* category gold */}
        {/* <CoursesOpen /> */}
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
      {user?.role == 'manager' ? (
        <Link className="editIcon" to="/dash/dashboard">
          D
        </Link>
      ) : null}
    </>
  )
}

export default Home
