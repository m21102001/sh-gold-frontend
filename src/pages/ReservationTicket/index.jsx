import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/layout"
import { FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import axios from "@/api/axios";
import './reservation.scss'
import { Link } from "react-router-dom";
const ReservationTicket = () => {
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get('/consultation/tickets/available')
      .then((response) => {
        setLoading(false)
        setConsultation(response.data)
        console.log('consultation', response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

  }, [])

  return (
    <>
      <Navbar />
      <div className="container text-center pt-5">
        {!loading && consultation?.data?.map((item, index) => (
          <Link
            to={''}
            state={{ item }}
            key={index}
            className="row row-striped shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col-2 text-right">
              <h1 className="display-4"><span className="badge badge-secondary date">{item?.day?.slice(8, 10)}</span></h1>
              <h2>{item?.day?.slice(5, 7)}</h2>
            </div>
            <div className="col-10 fs-4 text-end" >
              <h3 className="text-uppercase"><strong>{item?.title}</strong></h3>
              <ul className="list-inline">
                <li className="list-inline-item mx-3"><FaClock size={30} color={'var(--gold-color)'} />{item?.startDate}</li>
                <li className="list-inline-item mx-3"><MdTimer size={30} color={'var(--gold-color)'} />{item?.duration}  دقيقه</li>
                <li className="list-inline-item mx-3"><ImLocation2 size={30} color={'blue'} /> {item?.type}</li>
              </ul>
              <ul className="list-inline">
                <li className="list-inline-item mx-3"><FaMoneyBillAlt size={30} color={'#198754'} /> {item?.price}دينار كويتى</li>
                <li className="list-inline-item mx-3"><FaClock size={30} color={'var(--gold-color)'} />12:30 PM - 2:00 PM</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default ReservationTicket