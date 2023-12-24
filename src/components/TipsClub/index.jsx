import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '@/api/axios';
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
                  <div key={index} className="card text-center" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{item?.message}</h5>
                      <div className="news-date">
                        <label className="mx-2">التاريخ : {item?.createdAt?.split('T', 1)} </label>
                      </div>
                    </div>
                </div> 
              ))}
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldStore
