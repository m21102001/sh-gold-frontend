import { services } from "@/db/data"
import "./ServicesIncluded.scss"
const ServicesIncluded = () => {
  return (
    <div className="Container ServicesIncluded">
      <h2 className="services ">خدماتنا :</h2>
      <div className="services-card d-flex flex-column flex-wrap align-content-center align-items-start justify-content-center">
        {services?.map((item, index) => (
          <div key={index} className=" shadow-lg p-3 px-3 mb-5 bg-body rounded cardService">
            <h2 className="text-end mb-4 text-light">{item?.title}</h2>
            <div className="row d-flex flex-row align-content-center align-items-center justify-content-center">
              <div className="col-lg-9 col-sm-12">
                <p className="text-end  fs-5">{item?.description}</p>
              </div>
              <div className="col-lg-3 col-sm-12">
                <button type="button" className="d-flex m-auto px-5 fs-4">{item?.button}</button>
              </div>
            </div>
          </ div>
        ))}
      </div>
    </div>
  )
}

export default ServicesIncluded