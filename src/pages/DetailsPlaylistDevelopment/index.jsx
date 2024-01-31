import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from "@/layout"
import ReactPlayer from 'react-player/lazy'
import axios from "@/api/axios";
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailsPlaylistDevelopment = () => {
  const navigate = useNavigate()
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([])
  const [payment, setPayment] = useState([])
  const [btnPayment, setBtnPayment] = useState([])

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
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setBtnPayment(error.response.status)
        // console.log(error.response.status);
      });
  }, []);

  // console.log(btnPayment);
  console.log(item);
  return (
    <div style={{ backgroundColor: "var(--darkblue-color)" }}>
      <Navbar />
      <div className="pt-5">
        <button onClick={() => navigate('/development')} type="button" className="btn btn-primary px-5 ms-5">رجوع </button>
      </div>
      <div className="row pt-5 align-items-start m-auto" style={{ backgroundColor: "var(--darkblue-color)" }}>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container gold-dash">
              <div className={styles['home-grid']}>
                {!loading && getvideos?.document?.map((item, index) => (
                  <div key={index} className={styles['gold-div']}>
                    <div style={{ width: '-webkit-fill-available', height: '-webkit-fill-available' }}>
                      <ReactPlayer
                        url={item?.url}
                        config={{
                          youtube: {
                            playerVars: { showinfo: 1 },

                          },
                        }}
                        width='-webkit-fill-available'
                        height={'350px'}
                      />
                    </div>
                    <div className=''>
                      <h3 className='fw-700' style={{ fontSize: 'clamp(0.7rem,20vw,1.3rem)' }}>{item.title}</h3>
                      <Link
                        to={`/development/details-video/${item?._id}`}
                        state={{ item: item }}
                      >
                        <button>شاهد الان</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {!loading && getvideos.length == 0 || btnPayment == 401 ? (
                <div className="text-center">
                  <LazyLoadImage
                    // src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`}
                    alt={item?.title}
                    loading="lazy"
                  />
                  <button>
                    <a
                      className="text-light fs-3 px-2"
                      href={payment?.data}
                      target="_blank"
                      rel="noreferrer">
                      شراء الكورس
                    </a>
                  </button>
                </div>
              ) : null}
            </div>
          </>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailsPlaylistDevelopment
