import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from '@/api/axios'
import { FaLocationDot } from "react-icons/fa6";
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { FaShoppingCart } from "react-icons/fa";
const GoldNews = () => {
  const navigate = useNavigate();
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState([])
  const [payment, setPayment] = useState([])
  const [count, setCount] = useState(10)

  const getInitialState = () => {
    let value = item?.option;
    if (value == null) {
      (value = 'online')
    }

    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };


  useEffect(() => {
    setLoading(true);
    axios.get('/gold-bars/')
      .then((response) => {
        setGoldData(response.data);
        setLoading(false);

        console.log("bookData", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  let id = item?._id
  let type = item?.category

  useEffect(() => {
    setLoading(true);
    axios.get(`gold-bars/pay/${item?._id}?count=${count}&type=${value}`)
      .then((response) => {
        setPayment(response.data);
        setLoading(false);
        // console.log("bookData", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  console.log(payment);
  return (
    <div style={{ background: "var(--darkblue-color)" }}>
      <Navbar />
      <button onClick={() => navigate('/bullion-store')} type="button" className="btn btn-primary px-5 my-3 ms-5">رجوع </button>
      <div className="text-center shadow-lg px-3 mx-3 mt-3 mb-5 bg-body rounded">
        <h2 className='p-3 fs-1 fw-bold' style={{ color: 'var(--main-color)' }}>{item?.title}</h2>
        <div className="row align-items-center" style={{ margin: '0 -16px 0 -16px' }}>
          <div className="col-md-6 col-sm-12 p-0">
            <LazyLoadImage
              src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`}
              alt={item?.title}
              loading="lazy"
              style={{ width: '-webkit-fill-available', height: '40rem', borderRadius: '2px' }}
            />
          </div>
          <div className="col-md-6 col-sm-12 p-3 text-light container" style={{ height: '40rem', backgroundColor: 'var(--darkblue-color)', borderRadius: '4px' }}>
            <div className='d-flex justify-content-start flex-column align-items-start align-content-start flex-wrap'>
              <h6>السعر  </h6>
              <strong className='fs-4' style={{ color: 'var(--gold-color)' }}>{item?.price} دينار كويتى</strong>
            </div>
            <div className='d-flex justify-content-start flex-column align-items-start align-content-start flex-wrap'>
              <h6>النوع  </h6>
              <strong className='fs-4' style={{ color: 'var(--gold-color)' }}>{type}</strong>
            </div>
            <div className='d-flex justify-content-start flex-column align-items-start align-content-start flex-wrap py-3'>
              <h6>الوزن والمقاس  </h6>
              <strong className='fs-4 fw-normal' >{item?.size}  جرام</strong>
            </div>
            <div className='d-flex justify-content-start flex-column align-items-start align-content-start flex-wrap py-3'>
              <h6> الوصف الكامل  </h6>
              <strong className='fs-4 fw-normal ' > {item?.description} </strong>
            </div>
            <div className='d-flex justify-content-start flex-column align-items-start align-content-start flex-wrap py-3'>
              <h6> متوفر فى   </h6>
              <div className='d-flex'>
                <div className='d-flex justify-content-start flex-row align-items-start align-content-start flex-wrap pb-3'>
                  <h6 className='mx-3'> <FaLocationDot color='var(--gold-color)' /></h6>
                  <strong className='fs-4 fw-normal ' >{item?.description} </strong>
                </div>
              </div>
              <div className='d-flex'>
                <div className='d-flex justify-content-start flex-row align-items-start align-content-start flex-wrap pb-3'>
                  <h6 className='mx-3'> <FaLocationDot color='var(--gold-color)' /></h6>
                  <strong className='fs-4 fw-normal ' >{item?.description} </strong>
                </div>
              </div>
              <div className='d-flex'>
                <div className='d-flex justify-content-start flex-row align-items-start align-content-start flex-wrap pb-3'>
                  <h6 className='mx-3'> <FaLocationDot color='var(--gold-color)' /></h6>
                  <strong className='fs-4 fw-normal ' >{item?.description} </strong>
                </div>
              </div>
            </div>
            <div className='row text-dark'>
              <div className='d-flex flex-row  shadow p-3 mb-5 bg-body rounded'>
                <div className='d-flex '>
                  <a href={payment?.data} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary mx-2">شراء المنتج<FaShoppingCart /></button>
                  </a>
                  <div className="col-md-3 d-flex">
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      value={value}
                      onChange={handleChange}
                    >
                      <option defaultValue selected value="online">online</option>
                      <option value="offline">offline</option>
                      <option value="onlocation">on Location</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    min="1"
                    defaultValue={1}
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                </div>
                <button onClick={() => navigate('/bullion-store')} type="button" className="btn btn-outline-primary mx-2">استمرار التسوق</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='coursers-open goldNews py-5'>
        <div className='m-auto d-flex justify-content-center mb-5'>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold'>  منتجات من نفس النوع</h2>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container">
              <div className={styles['home-grid']}>
                {!loading && goldData?.document?.map((item, index) => (
                  index > 6 && item?.category == type && item?._id !== id ? (
                    <Link
                      key={index}
                      to={`/gold-news/${item._id}`}
                      state={{ item: item }}
                      onClick={window.scrollTo(0, 0)}
                    >
                      <div className={styles['gold-div']}>
                        <div className='title-card'>
                          <LazyLoadImage
                            src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`}
                            alt={item?.title}
                            loading="lazy"
                          />
                          <div className="news-date">
                            <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                            <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                          </div>
                        </div>
                        <div>
                          <h3 className='text-center fw-bold'>{item.title}</h3>
                        </div>
                      </div>
                    </Link>
                  ) : (null)
                ))}
              </div>
            </div>
          </>
        </div>
      </div >

      <div className='coursers-open goldNews py-5'>
        <div className='m-auto d-flex justify-content-center mb-5'>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold'>  باقى الانواع</h2>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container">
              <div className={styles['home-grid']}>
                {!loading && goldData?.document?.map((item, index) => (
                  index < 6 ? (
                    <Link
                      key={index}
                      to={`/gold-news/${item._id}`}
                      state={{ item: item }}
                    >
                      <div className={styles['gold-div']}>
                        <div className='title-card'>
                          <LazyLoadImage
                            src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`}
                            alt={item?.title}
                            loading="lazy"
                          />
                          <div className="news-date">
                            <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                            <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                          </div>
                        </div>
                        <div>
                          <h3 className='text-center fw-bold'>{item.category}</h3>
                        </div>
                      </div>
                    </Link>
                  ) : (null)
                ))}
              </div>
            </div>
          </>
        </div>
      </div >
      <Footer />
    </div>
  )
}

export default GoldNews