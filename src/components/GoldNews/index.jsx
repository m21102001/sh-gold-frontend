import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../GoldCard/GoldCard.module.scss';
import './GoldNews.scss'
const GoldNews = () => {
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(
      "https://newsapi.org/v2/everything?q=gold&from=2023-12-12&sortBy=publishedAt&apiKey=524b74b89f804f918385b51ac1adc506",
      // 'https://newsapi.org/v2/everything?q=gold&from=2024-01-01&sortBy=popularity&apiKey=524b74b89f804f918385b51ac1adc506',
      {
        withCredentials: false
      }
    )
      .then((response) => {
        setReport(response.data)
        console.log(response.data);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, [])

  ////////////////pagination///////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(11)

  const handelprev = () => {
    setPrev(count => count - 11)
    setNext(count => count - 11)
    if (prev <= 0) {
      setPrev(0);
      setNext(11)
    }
  }
  const handelNext = () => {
    setNext(count => count + 11);
    setPrev(count => count + 11)
    if (next < 11) {
      setPrev(0);
      setNext(11)

    }
  }
  console.log(report?.totalResults, prev, next);

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
              {report?.articles?.map((item, index) => (
                index >= prev && index <= next ? (
                  <Link
                    key={index}
                  >
                    <div className={styles['gold-div']}>
                      <div className='title-card'>
                        <LazyLoadImage
                          src={item?.urlToImage}
                        />
                        <div className="news-date">
                          <label className="news-date-time mx-2"> {item?.publishedAt?.slice(11, 16)}</label>
                          /
                          <label className="mx-2"> {item?.publishedAt?.split('T', 1)}  </label>
                        </div>
                      </div>
                      <div>
                        <h4>{item?.title}</h4>
                      </div>
                    </div>
                  </Link>
                ) : (null)
              ))}
            </div>
            < div className="pt-5 mt-5 d-flex justify-content-around " >
              <button className={`btn btn-outline-info ${next >= report?.totalResults ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
              <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldNews
