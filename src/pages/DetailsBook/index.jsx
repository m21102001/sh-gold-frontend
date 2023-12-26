import { Footer, Navbar } from "@/layout"
import { useLocation } from "react-router-dom"

const DetailsBook = () => {
  const item = useLocation()?.state?.item
  return (
<>
<Navbar/>
    <div className="m-auto container">
      <img src={`google.com`} alt="book"  />
      <div> title:{item?.title}</div>
      <div>price:{item?.price}</div>
      <div>description:{item?.desc}</div>
      <div>rating:{item?.rating}</div>
    </div>
    <Footer/>
</>
  )
}

export default DetailsBook
