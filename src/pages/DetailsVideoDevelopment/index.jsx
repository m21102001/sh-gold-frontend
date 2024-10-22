import { Footer, Navbar } from "@/layout"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailsVideoDevelopment = () => {
  const navigate = useNavigate()
  const item = useLocation()?.state.item
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([])

  let fetchBook = {
    method: 'get',
    url: `playlists/videos/${item?._id}`,
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
      .then((response) => {
        setGetvideos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  console.log("getvideos", getvideos);
  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: "var(--darkblue-color)", paddingTop: '2rem' }}>
        {/* <button onClick={() => navigate(`/development/details-playlist/${item?._id}`)} type="button" className="btn btn-primary px-5 ms-5">رجوع </button> */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                {item?.url == null ? (
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                    alt={item?.title}
                  />
                ) : (
                  <ReactPlayer
                    url={item?.url}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 }
                      },
                    }}
                    controls
                    width='100%'
                    height='70vh'
                  />
                )}
                <div className="card-body text-end">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">عنوان الفيديو</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{item?.title}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">وصف الفيديو</p>
                    </div>
                    <div className="col-sm-9">
                      <p className={`text-muted mb-0`}>{item?.description}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">تاريخ الاضافة </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{item?.createdAt?.split('T', 1)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='coursers-open goldNews py-5'>
        <div className='m-auto d-flex justify-content-center mb-5'>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold'>  فديوهات  القائمة </h2>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container ">
              <div className={styles['home-grid']} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', padding: '0' }}>
                {!loading && getvideos?.map((item, index) => (
                  <div key={index} className={styles['gold-div']} style={{ height: '570px' }}>
                    <div className="p-0">
                      <ReactPlayer
                        url={item?.url}
                        config={{
                          youtube: {
                            playerVars: { showinfo: 1 }
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
                        onClick={window.scrollTo(0, 0)}
                      >
                        <button>شاهد الان </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default DetailsVideoDevelopment