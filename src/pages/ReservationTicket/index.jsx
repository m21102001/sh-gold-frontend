import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "@/layout"
import { FaCalendarAlt, FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineArrowBack, MdTimer } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import axios from "@/api/axios";
import './reservation.scss'
const ReservationTicket = () => {
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get('/consultation/tickets/available')
      .then((response) => {
        setLoading(false)
        setConsultation(response.data)
        // console.log('consultation', response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

  }, [])
  return (
    <div style={{ color: 'var(--darkblue-color)' }}>
      <Navbar />
      <Link to={'/club'} className=' d-flex flex-row-reverse'>
        <button type="button" className="fw-bold text-light bacground-color-darkblue fs-5 mt-3 ms-3 back-details-button"
        ><MdOutlineArrowBack size={30} /></button>
      </Link>
      <div className="container text-center pt-4">
        {!loading && consultation?.data?.map((item, index) => (
          <Link
            to={`/auth/shop`}
            state={{ item }}
            key={index}
            className="row row-striped shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col-3 text-right">

              {/* <h1 className="display-4"><span className="badge badge-secondary date">{item?.day?.slice(8, 10)}</span></h1>
              <h2>{item?.day?.slice(5, 7)}</h2> */}
            </div>
            <div className="col-12 fs-4 text-end" >
              <div className="mb-3 d-flex justify-content-between align-items-start">
                <h3 className="text-uppercase"><strong>{item?.title}</strong></h3>
                <button type="button" className="btn btn-success">ادفع الان</button>
              </div>
              <ul className="list-inline">
                <li className="list-inline-item mx-3"><span className="mx-2"><FaClock size={30} color={'var(--gold-color)'} /></span>{item?.startDate}</li>
                <li className="list-inline-item mx-3"><span className="mx-1"><MdTimer size={30} color={'var(--gold-color)'} /> </span>{item?.duration} دقيقة</li>
                <li className="list-inline-item mx-3"><span className="mx-1"><ImLocation2 size={30} color={'blue'} /> </span>{item?.type == 'online' ? 'استشارة هاتفية' : 'استشارة حضورية'}</li>
              </ul>
              <ul className="list-inline">
                <li className="list-inline-item mx-3"> <span className="mx-1"><FaCalendarAlt size={30} color={'var(--gold-color)'} /></span> {item?.day?.slice(0, 10)}</li>
                <li className="list-inline-item mx-3"> <span className="mx-1"><FaMoneyBillAlt size={30} color={'#198754'} /></span> {item?.price} دينار كويتى</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default ReservationTicket