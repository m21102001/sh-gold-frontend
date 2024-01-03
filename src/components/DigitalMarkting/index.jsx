import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "@/api/axios"
import styles from '../GoldCard/GoldCard.module.scss';
import ReactPlayer from 'react-player/lazy'


const DigitalMarkting = () => {
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
    <div className='coursers-open'>
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> التدريب و التطوير   </h2>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container gold-dash">
            <div className={styles['home-grid']} style={{gridTemplateColumns:'repeat(auto-fill, minmax(370px, 1fr))'}}>
              {!loading && getvideos?.document?.map((item, index) => (
                index < 3 ? (
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
                      // height='320px'
                    // style={{
                    //   position: "absolute",
                    //   top: "0",
                    //   left: "0",
                    // }}
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
                ) : ('')
              ))}
            </div>
          </div>
        </>
      </div>
      <Link to="/development">
        <h4 className="fw-bold text-center my-5 text-decoration-underline text-opacity-75" data-bs-title="Another tooltip">شاهد جميع الانواع </h4>
      </Link>
    </div >
  )
}

export default DigitalMarkting