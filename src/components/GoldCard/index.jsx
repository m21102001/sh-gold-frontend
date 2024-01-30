import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "@/api/axios"
import styles from './GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";

const GoldCard = () => {

  const [loading, setLoading] = useState(false);
  const [getInvestment, setGetInvestment] = useState([])

  let fetchBook = {
    method: 'get',
    url: '/invest/active',
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
      .then((response) => {
        setGetInvestment(response.data);
        setLoading(false);
        // console.log("GetInvestment", response.data);
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
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> الاستثمار   </h2>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container gold-dash">
            <div className={styles['home-grid']} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))', gap: '90px' }}>
              {!loading && getInvestment?.invest?.map((item, index) => (
                index < 3 ? (
                  <div key={index} className={styles['gold-div']}>
                    <div>
                      <LazyLoadImage
                        src={`${import.meta.env.VITE_IMAGE_URL}${item.images[0]}`}
                        alt={item?.title}
                        loading="lazy"
                        style={{height:'318px'}}
                        // height={'318px'}
                        />

                    </div>
                    <div className=''>
                      <h3 className=' fw-700'>{item.title}</h3>
                      <Link
                        to={`/club/project-idea/${item?._id}`}
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
      <Link to="/investment">
        <h4 className="fw-bold text-center my-5 text-decoration-underline text-opacity-75" data-bs-title="Another tooltip"> المزيذ من الافكار  </h4>
      </Link>
    </div >
  )
}

export default GoldCard