import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from "@/layout"
import axios from "@/api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailsPlaylistDevelopment = () => {
  const navigate = useNavigate()
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([])
  const [payment, setPayment] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get(`playlists/pay/${item?._id}`)
      .then((response) => {
        setPayment(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
      });

  }, [])

  useEffect(() => {
    setLoading(true);
    axios.get(`/playlists/${item?._id}/videos`)
      .then((response) => {
        setGetvideos(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  // console.log(btnPayment);
  console.log('fff', payment);
  return (
    <div style={{ backgroundColor: "var(--darkblue-color)" }}>
      <Navbar />
      <div className="pt-5">
        <button onClick={() => navigate('/development')} type="button" className="btn btn-primary px-5 ms-5">رجوع </button>
      </div>
      <div className="row pt-5 align-items-start m-auto" style={{ backgroundColor: "var(--darkblue-color)" }}>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container gold-dash text-end">
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <LazyLoadImage
                              src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                              alt={item?.title}
                              loading="lazy"
                              style={{ width: 'web' }}
                            />
                          </div>
                          <div className="row pt-5">
                            <div className="col-sm-3">
                              <p className="mb-0">  الاسم </p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{item?.title}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0"> السعر</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{item?.price}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0"> الوصف الكامل</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{item?.description}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">  مشاهده الفيديوهات</p>
                            </div>
                            <div className="col-sm-9">
                              {!loading && getvideos?.document?._id != null ?(
                                <Link
                                to={`/development/details-video/${item?._id}`}
                                state={{item}}
                                >مشاهده الفيديوهات</Link>
                              ):(
                                <button>
                                <a
                                className="text-light fs-3 px-2"
                                href={payment?.data}
                                target="_blank"
                                rel="noreferrer">
                                شراء الكورس
                                </a>
                                </button>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailsPlaylistDevelopment
