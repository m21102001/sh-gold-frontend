import { Footer, Navbar } from "@/layout"

// import useLocation from 'react-router-dom';
const index = () => {
  // const item = useLocation()?.state?.item;
  return (
    <div>
      <Navbar />
      {/* {item._id} */}
      Shop
      <Footer />
    </div>
  )
}

export default index
