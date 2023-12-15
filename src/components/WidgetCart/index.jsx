import { FaEye } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { FaChartSimple } from "react-icons/fa6";
import './WidgetCart.scss'
const WidgetCart = () => {
  return (
    // <div className="shadow-lg p-3 mb-5 bg-body rounded">
    <div className={`wordColor`}>
      <div className="row row-cols-1 my-1 row-cols-lg-5 g-2 g-lg-3">
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <GiProgression/> الارباح</h5>
            <p className="card-text fs-3 fw-semibold text-center">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaEye/> عدد الزيارات </h5>
            <p className="card-text fs-3 fw-semibold text-center">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> عمليات البيع</h5>
            <p className="card-text fs-3 fw-semibold text-center">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <BsPersonFillAdd/> عدد المشتركين</h5>
            <p className="card-text fs-3 fw-semibold text-center">51 </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default WidgetCart
