import "./WhyKambridage.scss"
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { whyCambridag } from "@/db/data";
const WhyKambridage = () => {
  return (
    <div className="Container ServicesIncluded why-kambridage">
      <h2 className="services">لماذا كامبردج ؟</h2>
      <div className="container text-center column">
        <div className="row">
          {whyCambridag?.map((item, index) => (
            <div key={index} className="col-md-6 col-sm-12">
              <div className="card mb-4 cardService">
                <div className="card-body row ">
                  <div className="col-2 fs-1 d-flex flex-column flex-wrap align-content-center align-items-center justify-content-center" ><HiMiniComputerDesktop/></div>
                  <div className="col-10 text-end ">
                    <h3 className="fs-bold">{item?.title}</h3>
                    {/* <p className="fw-bold fs-lg" style={{fontFamily:'system-ui',fontSize:"large"}}>{item?.title}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyKambridage
