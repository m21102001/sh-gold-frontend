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
            <h5 className="card-title"> <GiProgression/> اعضاء النادى</h5>
            <p className="card-text fs-3 fw-semibold text-center">23 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaEye/> عدد الكتب </h5>
            <p className="card-text fs-3 fw-semibold text-center">5 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaEye/> عدد التذاكر المباعه </h5>
            <p className="card-text fs-3 fw-semibold text-center">2 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaEye/> عدد التذاكر المتاحه </h5>
            <p className="card-text fs-3 fw-semibold text-center">1 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaEye/> طلبات شراء الكتب</h5>
            <p className="card-text fs-3 fw-semibold text-center">25 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaEye/>  عدد منتجات الدهب </h5>
            <p className="card-text fs-3 fw-semibold text-center">20 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> عمليات بيع الدهب</h5>
            <p className="card-text fs-3 fw-semibold text-center">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> طلبات شراء الدهب</h5>
            <p className="card-text fs-3 fw-semibold text-center">15 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> عدد الافكار المتاحه </h5>
            <p className="card-text fs-3 fw-semibold text-center">13 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> طلبات المثتسمرين  </h5>
            <p className="card-text fs-3 fw-semibold text-center">22 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> عدد الكورسات  </h5>
            <p className="card-text fs-3 fw-semibold text-center">22 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> بيع الكورسات   </h5>
            <p className="card-text fs-3 fw-semibold text-center">22 </p>
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
