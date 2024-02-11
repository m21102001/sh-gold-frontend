import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { Footer, Navbar } from "@/layout"
import axios from "@/api/axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { authenticated } from "@/context/Auth";
const DetailsBook = () => {
  // const user = useAuth()
  const authed = authenticated();
  const navigate = useNavigate();
  const itemId = useParams().id
  const dataUseLocation = useLocation().state.item;
  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState([])
  const [payment, setPayment] = useState([])
  const [bookData, setBookData] = useState([])
  const [bayBook, setBayBook] = useState([])

  const getInitialState = () => {
    const selectType = "online";
    return selectType;
  };
  const [type, setType] = useState(getInitialState);
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`books/${itemId}`)
      .then((response) => {
        setGoldData(response.data.document);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setBayBook(error.response.status)
      });
  }, [itemId]);

  useEffect(() => {
    setLoading(true);
    axios.get(`books/pay/${itemId}?type=${type}`)
      .then((response) => {
        setPayment(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
      });
  }, [type]);
  useEffect(() => {
    setLoading(true);
    axios.get(`/books`)
      .then((response) => {
        setBookData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

  }, [itemId]);
  return (
    <div style={{ background: "var(--darkblue-color)" }}>
      <Navbar />
      <button onClick={() => navigate('/book')} type="button" className="btn btn-primary px-5 my-3 ms-5 position-fixed" 
      style={{top: "22%",left: "2%",zIndex: "2"}}>رجوع </button>
      <div className="text-center shadow-lg p-3 mx-3 mt-3 mb-5 rounded" style={{ background: "var(--main-color)" }}>
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <LazyLoadImage
                  src={`${import.meta.env.VITE_IMAGE_URL}${dataUseLocation?.image}`}
                  alt={dataUseLocation?.title}
                  loading="lazy"
                  style={{ width: '-webkit-fill-available', height: '80vh', borderRadius: '10px' }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-6 col-sm-12 m-0 p-0">
            <section style={{ backgroundColor: 'var(--darkblue-color)' }}>
              <div className="container py-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-body" style={{ color: 'var(--main-color)' }}>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">اسم الكتاب  </p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{dataUseLocation?.title}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">السعر</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{dataUseLocation?.price} دينار كويتى</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">الوصف الكامل</p>
                          </div>
                          <div className="col-sm-9 overflow-auto" style={{ height: '20rem' }}>
                            <p className="text-muted fw-bold mb-0">{dataUseLocation?.description}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold"> قراءة الكتاب</p>
                          </div>
                          <div className="col-sm-9 overflow-auto" >
                            {authed == true && goldData?._id != null ? (
                              <Link
                                to={`/view-more-details/${goldData?._id}`}
                                state={{ item: dataUseLocation }}
                              >
                                <button className="text-muted fw-bold mb-0">الكتاب</button>
                              </Link>
                            ) : (
                              <div className="d-flex flex-row flex-wrap justify-content-around">

                                <button className="text-muted fw-bold mb-0">
                                  {/* <Link to={'/auth/request/payment/book/delivary'} state={{item:type}}>a
                                  </Link> */}
                                  <a
                                    className="text-light px-2"
                                    href={payment?.data}
                                    target="_blank"
                                    rel="noreferrer">
                                    شراء الكتاب
                                  </a>
                                </button>
                                <div className="col-md-3 d-flex">
                                  <select
                                    className="form-select"
                                    // style={{width:'10rem'}}
                                    aria-label="Default select example"
                                    value={type}
                                    onChange={handleChangeType}
                                  >
                                    <option selected value="online">النسخة الاكترونية</option>
                                    <option value="onlocation">النسخة الورقية (استلام من الشركة)</option>
                                    <option value="offline">النسخة الورقية ( توصيل للبيت)</option>
                                  </select>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">تاريخ الاضافة</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{dataUseLocation?.createdAt?.split('T', '1')}</p>
                          </div>
                        </div>
                        <div className="row align-items-center mt-5">
                          <div className="col-sm-4">
                            <button onClick={() => navigate('/book')} type="button" className="btn btn-primary mx-2">استمرار التسوق</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='coursers-open goldNews py-5'>
        <div className='m-auto d-flex justify-content-center mb-5'>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold'>  كتب متشابهة</h2>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container">
              <div className={styles['home-grid']}>
                {!loading && bookData?.document?.map((item, index) => (
                  index < 6 && itemId != item._id ? (
                    <Link
                      key={index}
                      to={`/book/detalis-book/${item._id}`}
                      state={{ item: item }}
                      onClick={
                        () => {
                          window.scrollTo(0, 0)
                          // click()
                        }}
                    >
                      <div className={styles['gold-div']}>
                        <div className='title-card'>
                          <LazyLoadImage
                            src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                            alt={item?.title}
                            loading="lazy"
                          />
                          <div className="news-date">
                            <label className="mx-2"> {item?.createdAt?.slice(0, 10)} </label>/
                            <label className="news-date-time mx-2">{item?.createdAt?.slice(11, 16)} </label>
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
      <Footer />
    </div >
  )
}
export default DetailsBook