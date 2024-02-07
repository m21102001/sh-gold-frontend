import { FaAngellist, FaBook,FaListAlt,FaMountain,FaSortAmountUp,FaTicketAlt } from "react-icons/fa";
import { FaChartSimple, FaCodePullRequest, FaMountainCity } from "react-icons/fa6";
import { BsPersonFillAdd, BsTicket } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import './WidgetCart.scss'
const WidgetCart = () => {
  return (
    // <div className="shadow-lg p-3 mb-5 bg-body rounded">
    <div className={`wordColor`}>
      <div className="row row-cols-1 my-1 row-cols-lg-5 g-2 g-lg-3">
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <RxAvatar /> اعضاء النادى</h5>
            <p className="card-text fs-3 fw-semibold text-center">23 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaBook /> عدد الكتب </h5>
            <p className="card-text fs-3 fw-semibold text-center">5 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaTicketAlt /> عدد التذاكر المباعة </h5>
            <p className="card-text fs-3 fw-semibold text-center">2 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <BsTicket /> عدد التذاكر المتاحة </h5>
            <p className="card-text fs-3 fw-semibold text-center">1 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple/> طلبات شراء الكتب</h5>
            <p className="card-text fs-3 fw-semibold text-center">25 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaMountain />  عدد منتجات الدهب </h5>
            <p className="card-text fs-3 fw-semibold text-center">20 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaSortAmountUp /> عمليات بيع الدهب</h5>
            <p className="card-text fs-3 fw-semibold text-center">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaMountainCity /> طلبات شراء الدهب</h5>
            <p className="card-text fs-3 fw-semibold text-center">15 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FcIdea /> عدد الافكار الاستثمارية المتاحة </h5>
            <p className="card-text fs-3 fw-semibold text-center">13 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaCodePullRequest /> طلبات المستثمرين  </h5>
            <p className="card-text fs-3 fw-semibold text-center">22 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaListAlt /> عدد الكورسات  </h5>
            <p className="card-text fs-3 fw-semibold text-center">22 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaAngellist /> بيع الكورسات   </h5>
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
