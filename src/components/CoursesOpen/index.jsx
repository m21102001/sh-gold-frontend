import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from '@/api/axios'
import { goldCategory } from '@/db/data';
const CoursesOpen = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([])

  // let fetchBook = {
  //   method: 'get',
  //   url: '/gold-bars/',
  // };
  // useEffect(() => {
  //   setLoading(true);
  //   axios.request(fetchBook)
  //     .then((response) => {
  //       setBookData(response.data);
  //       setLoading(false);
  //       console.log("bookData", response);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className='coursers-open'>
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> انواع السبائك </h2>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {!loading && goldCategory?.map((item, index) => (
                index < 8 ? (
                  <div key={index} className={styles['gold-div']}>
                    <div>
                      <LazyLoadImage
                        src={item?.image}
                        // src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                        alt={item?.name}
                        loading="lazy" />
                    </div>
                    <div className=''>
                      <h3 className=' fw-700'>{item.name}</h3>
                      <Link
                        to={`/bullion-store`}
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
      <Link to="/bullion-store">
        <h4 className="fw-bold text-center my-5 text-decoration-underline text-opacity-75" data-bs-title="Another tooltip">شاهد جميع الانواع </h4>
      </Link>
    </div >
  )
}

export default CoursesOpen