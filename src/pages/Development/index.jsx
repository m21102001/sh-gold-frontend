import { Footer, Navbar } from "@/layout"
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy'
import { FaFire } from "react-icons/fa";
import axios from '@/api/axios'
import { Link } from "react-router-dom";
import styles from '@/components/GoldCard/GoldCard.module.scss';
const Development = () => {
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([])

  let fetchBook = {
    method: 'get',
    url: '/videos/',
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
      .then((response) => {
        setGetvideos(response.data);
        setLoading(false);
        console.log("getvideos", response);
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
                  {!loading && getvideos?.document?.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <FaFire size={30} color={"gold"} />
                      <p className="mb-2  text-end">{item?.title}</p>
                    </li>
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
                    <div className={styles['home-grid']} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))' }}>
                      {!loading && getvideos?.document?.map((item, index) => (
                        <div key={index} className={styles['gold-div']} >
                          <div>
                            <ReactPlayer
                              url={item?.url}
                              config={{
                                youtube: {
                                  playerVars: { showinfo: 1 }
                                },
                              }}
                              width='100%'
                            />
                          </div>
                          <div className=''>
                            <h3 className=' fw-700'>{item.title}</h3>
                            <Link
                              to={`/development/details-video/${item?._id}`}
                              state={{ item: item }}
                            >
                              <button>تفاصيل اضافيه</button>
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