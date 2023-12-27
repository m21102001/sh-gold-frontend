import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';

import axios from '@/api/axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const GoldStore = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([])

  let fetchBook = {
    method: 'get',
    url: '/gold-bars/',
  };
  useEffect(() => {
    setLoading(true);
    axios.request(fetchBook)
      .then((response) => {
        setBookData(response.data);
        setLoading(false);
        console.log("bookData", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'>  متجر السبائك</h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {!loading && bookData?.document?.map((item, index) => (
                <Link
                  key={index}
                  to={`/gold-news/${item.id}`}
                  state={{ item: item }}
                >
                  <div className={styles['gold-div']}>
                    <div className='title-card'>
                      <LazyLoadImage src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`} alt="" loading="lazy" />
                      <div className="news-date">
                        <label className="mx-2"> {item?.createdAt?.split('T', '1')}</label>
                        {/* <label className="news-date-time mx-2"> 10:01 <span >ص</span></label> */}
                      </div>
                    </div>
                    <div>
                      <h3 className='text-center fw-bold'>{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldStore
