import { services } from "@/db/data"
import "./ServicesIncluded.scss"
import { useNavigate } from "react-router-dom"
const ServicesIncluded = () => {
  const navigate =useNavigate()
  return (
    <div className="Container ServicesIncluded" id="consalt">
      <h2 className="services ">خدماتنا :</h2>
      <div className="services-card d-flex flex-column flex-wrap ">
      {services?.map((item, index) => (
        index < 4 ?  (
        <div key={index} className="row g-0 text-center shadow-lg p-3 px-3 mb-5 bg-body rounded cardService cardService1 ">
          <div className="col-sm-12 col-md-8 ">
          <h2 className="text-end mb-2 text-light">{item.title}</h2>
          <br />
          <p className="text-end  fs-5">{item?.description}</p>
          </div>
          <div className="col-6 col-md-4 m-auto">
          <button type="button" className="d-flex m-auto px-5 fs-4" onClick={()=>navigate('/auth/reservation-ticket')}>{item?.button}</button>
          </div>
        </div>
        ):null
      ))}
      </div>
    </div>
  )
}

export default ServicesIncluded