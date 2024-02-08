import { FaAngellist, FaBook, FaListAlt, FaMountain, FaSortAmountUp, FaTicketAlt } from "react-icons/fa";
import { FaChartSimple, FaCodePullRequest, FaMountainCity } from "react-icons/fa6";
import { BsPersonFillAdd, BsTicket } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import './WidgetCart.scss'
import { useEffect, useState } from "react";
import axios from "@/api/axios";
const WidgetCart = () => {
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState([])
  useEffect(() => {
    setLoading(true);
    axios.get(`/users/length/`)
      .then((response) => {
        setAnalysis(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  console.log('first',analysis)
  return (
    <div className={`wordColor`}>
      {loading && <div className="loading"></div>}
      <div className="row row-cols-1 my-1 row-cols-lg-5 g-2 g-lg-3">
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <RxAvatar /> اعضاء النادى</h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.Club} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaBook /> عدد الكتب </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.Book}</p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <BsTicket /> عدد الاستشارات المتاحة </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.ConsultationTicket}</p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaTicketAlt /> طلبات الاستشارات </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.ConsultationRequest}</p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaTicketAlt /> طلبات استشارات النادى </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.FreeConsult}</p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaChartSimple /> طلبات التواصل مع الاستاذ صلاح</h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.ContactForm} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaMountain />طلبات شراء الدهب </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.GoldBarRequest} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaSortAmountUp /> عمليات بيع الدهب</h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.SellGoldBarRequest} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FcIdea /> عدد الافكار الاستثمارية المتاحة </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.Invest} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaCodePullRequest /> طلبات المستثمرين  </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.Investor} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaListAlt /> عدد الكورسات  </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.Playlist} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <FaAngellist /> بيع الكورسات   </h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.PlaylistRequest} </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <BsPersonFillAdd /> عدد المشتركين</h5>
            <p className="card-text fs-3 fw-semibold text-center">{analysis?.User} </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default WidgetCart
