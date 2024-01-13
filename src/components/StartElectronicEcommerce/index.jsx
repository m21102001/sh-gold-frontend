import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import book from "../../assets/img/kenzbook.png"
import { FaArrowLeft } from "react-icons/fa";
import axios from "@/api/axios";

import "./StartElectronicEcommerce.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";
const StartElectronicEcommerce = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [showMore2, setShowMore2] = useState(false)

  let fetchBook = {
    method: 'get',
    url: '/books',
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
      .then((response) => {
        setBookData(response.data);
        setLoading(false);
        console.log("bookData", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="StartElectronicEcommerce my-5 ">
      <div>
        <h2 className="text-light text-center fw-semibold my-3 pt-4">افضل الكتب فى الاستثمار وبيع وشراء الذهب</h2>
        {!loading && bookData?.document?.map((item, index) => (
          index == 0 ? (
            <div key={index} className="Container">
              <div className="row align-items-center">
                <div className="col-md-8 col-sm-12 px-5">
                  <h2 className="mb-3 text-end text-light">{item?.title}</h2>
                  <h3 className="text-end text-light fs-4 lh-lg">
                    {showMore ? item?.description?.substring(400,800) : `${item?.description?.substring(0, 400)}`}
                    <span onClick={() => setShowMore(!showMore)} className="mx-4 cursorPointer" style={{color: 'var(--gold-color)', cursor: 'pointer' }}>{showMore ? "Read less" : "Read more..."}</span>

                  </h3>
                </div>
                <div className="col-md-4 col-sm-12">
                  <LazyLoadImage src={`${book}`} alt="Kenz book" className="kenzbook" />
                </div>
              </div>
            </div>
          ) : ('')
        ))}
        {!loading && bookData?.document?.map((item, index) => (
          index == 1 ? (
            <div key={index} className="Container">
              <div className="row align-items-center">
                <div className="col-md-4 col-sm-12">
                  <LazyLoadImage src={book} alt="Kenz book" className="kenzbook" />
                </div>
                <div className="col-md-8 col-sm-12 px-5">
                  <h2 className="mb-3 text-end text-light">{item?.title}</h2>
                  <h3 className="text-end text-light fs-4 lh-lg">
                    {showMore2 ? item?.description?.substring(400,800) : `${item?.description?.substring(0, 400)}`}
                    <span onClick={() => setShowMore2(!showMore2)} className="mx-4 cursorPointer" style={{color: 'var(--gold-color)', cursor: 'pointer' }}>{showMore2 ? "Read less" : "Read more..."}</span>

                  </h3>
                </div>
              </div>
            </div>
          ) : ('')
        ))}
        <button onClick={() => navigate('/book')} className="d-flex m-auto"> لقرأه المزيد <FaArrowLeft color="var(--darkblue-color)" size={30} pointsAtX={2} /></button>
      </div>
    </div >
  )
}

export default StartElectronicEcommerce