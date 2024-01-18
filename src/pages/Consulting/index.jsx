import { Fragment } from "react"
import { Footer, Navbar } from "@/layout"
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { consalting } from "@/db/data"

import './consalting.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <div className="consalting">
      <Navbar />
      <div className="StartElectronicEcommerce">
        <div>
          <div className="Container">
            <div className="row align-items-start">
              {consalting?.map((item, index) => (
                <Fragment key={index}>
                  <div className="col-lg-9 col-md-12 px-5">
                    <h2 className="text-light text-end fw-semibold my-3 pt-4 digitalMarkting">الاستشارات</h2>
                    <h3 className="text-end text-light mb-4">{item?.desc}</h3>
                    <h3 className="text-end text-light mb-4">{item?.secterm}</h3>
                  </div>
                  <div className="row justify-content-center mt-5 card-style text-end">
                    <h2 className="text-center text-light fw-bold mb-5">{item?.conslatedType}</h2>
                    {item?.type?.map((item, index) => (
                      <Link
                      to={'/auth/reservation-ticket'}
                      key={index} className="col-md-5 col-sm-12 mx-3 mb-5 p-0 card">
                        <LazyLoadImage src={item?.image} className="card-img-top" alt={item?.alt} />
                        <div className="card-body">
                          <h5 className="card-title">{item?.title}</h5>
                          <p className="card-text">{item?.desc}</p>
                        </div>
                      </Link>
                    ))}
                    <h2 className="text-center text-light fw-bold mb-5">{item?.conslated}</h2>
                    {item?.book?.map((item, index) => (
                      <div key={index} className="col-md-5 col-sm-12 mx-3 mb-5 p-0 card">
                        <div className="card-body">
                          <h5 className="card-title">{item?.title}</h5>
                          <h3 className="card-title"><span className="ms-4"><FaMoneyBill1Wave /></span>{item?.price}</h3>
                        </div>
                      </div>
                    ))}
                    <h2 className="text-center text-light fw-bold mb-5">{item?.mechanism}</h2>
                    {item?.Reservation?.map((item, index) => (
                      <div key={index} className="col-sm-12 mx-3 mb-5 p-0 card">
                        <div className="card-body">
                          <ul className="mx-3 fs-5 fw-bold">
                            <li className="card-title">{item?.title}</li>
                            <li className="card-title">{item?.title2}</li>
                            <li className="card-title">{item?.title3}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Consulting
