import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { MdTipsAndUpdates } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import styles from '../GoldCard/GoldCard.module.scss';
const GoldStore = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`/club`)
      .then((response) => {
        setMessage(response.data)
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
  console.log(prev, next);

  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'> نصايح الاستاذ صلاح  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {!loading && message?.messages?.map((item, index) => (
                index >= prev && index <= next ? (
                  <div key={index} className="card text-end" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold" style={{ color: 'var(--main-color)' }}>
                        <MdTipsAndUpdates size={40} color="#ffcc00" />
                        {item?.message}
                      </h5>
                      <div className="news-date">
                        <label className="mx-2">التاريخ : {item?.createdAt?.split('T', 1)} </label>
                      </div>
                    </div>
                  </div>
                ) : null
              ))}
            </div>
            < div className="pt-5 mt-5 d-flex justify-content-around " >
              <button className={`btn btn-outline-info`} onClick={handelNext}> next</button>
              <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldStore
