import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdTipsAndUpdates } from "react-icons/md";
import axios from '@/api/axios';
import styles from '../GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './investment.scss'
const Investment = () => {
  const [loading, setLoading] = useState(false)
  const [investment, setInvestment] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`/invest/active`)
      .then((response) => {
        setInvestment(response.data)
        // console.log('ffff',response.data);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, [])

  ////////////////pagination///////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  const handelprev = () => {
    setPrev(count => count - 10)
    setNext(count => count - 10)
    if (prev <= 0) {
      setPrev(0);
      setNext(10)
    }
  }
  const handelNext = () => {
    setNext(count => count + 10);
    setPrev(count => count + 10)
    if (next < 10) {
      setPrev(0);
      setNext(10)

    }
  }
  // console.log(prev, next);

  return (
    <div className='coursers-open goldNews py-5 '>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'> مشاريع استثمارية</h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <Link to='/club/add-project-idea' style={{ position: 'fixed', bottom: '15px', left: "11px", zIndex: "1" }}>
        <button type="button" className="btn btn-warning fw-bold">
          <MdTipsAndUpdates size={40} />
          فكرة جديدة
        </button>
      </Link>
      <div className='m-auto d-flex justify-center investment'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {!loading && investment?.invest?.map((item, index) => (
                index >= prev && index <= next ? (
                  <Link
                    key={index}
                    to={`/club/project-idea/${item._id}`}
                    state={{ item: item }}
                  >
                    <div className={styles['gold-div']}>
                      <div className='title-card'>
                        <LazyLoadImage
                            src={`${import.meta.env.VITE_IMAGE_URL}${item.images}`}
                          alt={item?.title}
                          loading='lazy'
                        />
                        <div className="news-date">
                          <label className="mx-2"> {item?.createdAt?.split('T', 1)} </label>/
                          <label className="news-date-time mx-2">{item?.createdAt?.slice(11,16)}</label>
                        </div>
                      </div>
                      <div>
                        <h3 className='text-center fw-bold'>{item?.title}</h3>
                        {/* <h4>{item.title}</h4> */}
                      </div>
                    </div>
                  </Link>
                ) : null
              ))}
            </div>
            < div className="pt-5 mt-5 d-flex justify-content-around " >
              <button className={`btn btn-outline-info ${next >= investment?.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
              <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default Investment
