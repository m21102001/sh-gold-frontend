import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/layout"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link, useLocation } from "react-router-dom"
import styles from '../../components/GoldCard/GoldCard.module.scss';
import axios from "@/api/axios";
const DetailsBook = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState([])

  let fetchBook = {
    method: 'get',
    url: '/books',
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
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
  return (
    <div style={{ background: "var(--darkblue-color)" }}>
      <Navbar />
      <div className="text-center shadow-lg p-3 mx-3 mt-3 mb-5 bg-body rounded">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <LazyLoadImage
              src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`}
              alt=""
              loading="lazy"
              style={{ width: '-webkit-fill-available', height: '80vh', borderRadius: '10px' }}
            />
          </div>
          <div className="col-md-6 col-sm-12 m-0 p-0">
            <section style={{ backgroundColor: "#eee" }}>
              <div className="container py-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">الاسم</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{item?.title}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">السعر</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{item?.price} دينار كويتى</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">الوصف الكامل</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{item?.description}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">تاريخ الاضافه</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{item?.createdAt?.split('T', '1')}</p>
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
          <h2 className='text-center comunation fs-1 fw-bold'>  منتجات متشابهة</h2>
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
                      to={`/book/detalis-book/${item._id}`}
                      state={{ item: item }}
                    >
                      <div className={styles['gold-div']}>
                        <div className='title-card'>
                          <LazyLoadImage
                            src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`}
                            alt=""
                            loading="lazy"
                          />
                          <div className="news-date">
                            <label className="mx-2"> {item?.createdAt?.split('T', '1')} </label>
                            {/* <label className="news-date-time mx-2"> 10:01 <span >ص</span></label> */}
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
    </div>
  )
}

export default DetailsBook

// src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.image}`}