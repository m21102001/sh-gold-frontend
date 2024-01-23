import { Footer, Navbar } from "@/layout"
import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import axios from '@/api/axios'
import { Link } from "react-router-dom";
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
const Development = () => {
  const [loading, setLoading] = useState(false);
  const [getPlaylist, setGetPlaylist] = useState([])



  let fetchPlaylist = {
    method: 'get',
    url: '/playlists',
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchPlaylist)
      .then((response) => {
        setGetPlaylist(response.data);
        setLoading(false);
        console.log("getplaylist", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--darkblue-color)' }}>
      <Navbar />
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "var(--gold-color)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> التدريب والتطوير   </h2>
        <span style={{ zIndex: "0", backgroundColor: "var(--gold-color)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className="mx-3 pt-5 text-center">
        <div className="row align-items-start">
          <div className="col-md-3 col-sm-12">
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <h5 className="card-title text-center fs-4 fw-bold pt-2 mb-4">الاكثر مشاهده</h5>
                <ul className="list-group list-group-flush rounded-3">
                  {!loading && getPlaylist?.document?.map((item, index) => (
                    <Link
                      to={`/development/details-playlist/${item?._id}`}
                      state={{ item }}
                      key={index}
                      className="list-group-item d-flex align-items-center p-3"
                    >
                      <FaFire size={30} color={"gold"} />
                      <LazyLoadImage
                        src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                        alt={item?.title}
                        style={{
                          width: "55px",
                          height: "55px",
                          margin: '0 0.7rem',
                          borderRadius: '50%'
                        }}
                      />
                      <p className="mb-2 me-4 text-end">{item?.title}</p>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="row align-items-start">
              <div className='m-auto d-flex justify-center'>
                <>
                  <div className="container gold-dash">
                    <div className={styles['home-grid']} >
                      {!loading && getPlaylist?.document?.map((item, index) => (
                        <div key={index} className={styles['gold-div']} style={{ height: '290px' }} >
                          <div style={{ width: '-webkit-fill-available', height: '-webkit-fill-available' }}>
                            <LazyLoadImage
                              src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                              alt={item?.description}
                            />
                          </div>
                          <div className=''>
                            <h3 className=' fw-700'>{item.title}</h3>
                            <Link
                              to={`/development/details-playlist/${item?._id}`}
                              state={{ item: item }}
                            >
                              <button>ابدا الكورس</button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Development