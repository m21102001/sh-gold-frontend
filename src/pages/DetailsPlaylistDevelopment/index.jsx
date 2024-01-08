import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/layout"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import styles from '@/components/GoldCard/GoldCard.module.scss';
import axios from "@/api/axios";

const DetailsPlaylistDevelopment = () => {
  const navigate = useNavigate()
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([])

  let fetchBook = {
    method: 'get',
    url: `/playlists/${item?._id}/videos`,
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
      .then((response) => {
        setGetvideos(response.data);
        setLoading(false);
        console.log("getvideos from this playlist", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "var(--darkblue-color)" }}>
      <Navbar />
      <button onClick={() => navigate('/development')} type="button" className="btn btn-primary px-5 ms-5">رجوع </button>
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
            </div>
          </>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailsPlaylistDevelopment
