import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
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
        // console.log("bookData", response);
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
      });
  }, []);

  return (
    <div className="StartElectronicEcommerce my-5 ">
      <div>
        <h2 className="text-center fw-bold mb-5 pt-5" style={{ color: 'var(--gold-color)' }}>افضل الكتب فى الاستثمار وبيع وشراء الذهب</h2>
        {!loading && bookData?.document?.map((item, index) => (
          index == 0 ? (
            <div key={index} className="Container">
              <div className="row align-items-center">
                <div className="col-md-7 col-sm-12 px-5">
                  <Link to={`/book/detalis-book/${item?._id}`} state={{ item }}>
                    <h2 className="mb-3 text-end" style={{ color: "var(--gold-color)" }}>{item?.title}</h2>
                  </Link>
                  <h3 className="text-end text-light fs-4 lh-lg">
                    {showMore ? item?.description?.substring(400, 800) : `${item?.description?.substring(0, 400)}`}
                    <span
                      onClick={() => setShowMore(!showMore)}
                      className="mx-4 cursorPointer"
                      style={{ color: 'var(--gold-color)', cursor: 'pointer', transitionTimingFunction: "ease" }}>{showMore ? "Read less" : "Read more..."}
                    </span>
                  </h3>
                </div>
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-4 col-sm-12">
                  <Link to={`/book/detalis-book/${item?._id}`} state={{ item }}>
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      alt={item?.title}
                      className="kenzbook"
                      lazy
                    />
                  </Link>
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
                  <Link to={`/book/detalis-book/${item?._id}`} state={{ item }}>
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      alt={item?.title}
                      className="kenzbook"
                      lazy
                    />
                  </Link>
                </div>

                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-7 col-sm-12 px-5">
                  <Link to={`/book/detalis-book/${item?._id}`} state={{ item }}>
                    <h2 className="mb-3 text-end" style={{ color: "var(--gold-color)" }}>{item?.title}</h2>
                  </Link>
                  <h3 className="text-end text-light fs-4 lh-lg">
                    {showMore2 ? item?.description?.substring(400, 800) : `${item?.description?.substring(0, 400)}`}
                    <span
                      onClick={() => setShowMore2(!showMore2)}
                      className="mx-4 cursorPointer"
                      style={{ color: 'var(--gold-color)', cursor: 'pointer' }}
                    >
                      {showMore2 ? "Read less" : "Read more..."}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          ) : ('')
        ))}
        {bookData?.length == 0 ? (
          <h3 className={`text-center fs-2 alert alert-danger`} role="alert">please <Link to={'/auth/login'}>Login</Link> for show it here</h3>
        ) : ('')}
        <button onClick={() => navigate('/book')} className="d-flex m-auto text-center"><span className="mx-3"> قراءة المزيد</span><FaArrowLeft color="var(--darkblue-color)" size={30} pointsAtX={2} /></button>
      </div>
    </div >
  )
}

export default StartElectronicEcommerce