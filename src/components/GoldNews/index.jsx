import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../GoldCard/GoldCard.module.scss';
import './GoldNews.scss'
const GoldNews = () => {
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState([])
  const [pageNum, setPageNum] = useState(1)
  useEffect(() => {
    setLoading(true)
    axios.get(
      `${import.meta.env.VITE_GOLD_NEWS}news?pageNo=${pageNum}&PageSize=9`,
      {
        withCredentials: false
      }
    )
      .then((response) => {
        setReport(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        // console.log(error);
      });
  }, [pageNum])
  return (
    <div className='coursers-open goldNews py-5'>
      {loading && <div className='loading'></div>}
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'> اخبار الذهب</h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {report?.result?.homeNewsModel.map((item, index) => (
                <Link
                  key={index}
                  to={`/club/details-news/${item?.id}`}
                  state={{ item }}
                >
                  <div className={styles['gold-div']}>
                    <div className='title-card'>
                      <LazyLoadImage
                        src={`https://stgaccountdals.blob.core.windows.net/prdcont/${item?.imageUrl?.url}`}
                      />
                      <div className="news-date">
                        <label className="news-date-time mx-2"> {item?.createdOn?.slice(11, 16)}</label>
                        /
                        <label className="mx-2"> {item?.createdOn?.split('T', 1)}  </label>
                      </div>
                    </div>
                    <div>
                      <h4>{item?.titleAr}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            < div className="pt-5 mt-5 d-flex justify-content-around " >
              <button
                className={`btn btn-outline-info ${pageNum == report?.result?.newsCount ? 'disabled' : ''}`}
                onClick={() => setPageNum(e => e + 1)}
              > next</button>
              <h3 className="text-light"> صفحة رقم : {pageNum} </h3>
              <button className={`btn btn-outline-info ${pageNum == 1 ? 'disabled' : ''}`}
                onClick={() => setPageNum(e => e - 1)}
              > prev</button>
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldNews
