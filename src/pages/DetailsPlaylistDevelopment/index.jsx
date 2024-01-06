import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/layout"
import { Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import styles from '@/components/GoldCard/GoldCard.module.scss';
import axios from "@/api/axios";

const DetailsPlaylistDevelopment = () => {
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
    <>
      <Navbar />
      <div className="row pt-5 align-items-start m-auto" style={{ backgroundColor: "var(--darkblue-color)" }}>
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
                            playerVars: { showinfo: 1 },

                          },
                        }}
                        width='-webkit-fill-available'
                        height={'350px'}
                      />
                    </div>
                    <div className=''>
                      <h3 className=' fw-700'>{item.title}</h3>
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
    </>
  )
}

export default DetailsPlaylistDevelopment
