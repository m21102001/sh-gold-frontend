import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';
import { courses } from '@/db/data';

const GoldStore = () => {
  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'> انواع الذهب</h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                index < 8 ? (
                  <Link
                    key={index}
                    to={`/bullion-store/${item.id}`}
                    state={{ item: item }}
                  >
                    <div className={styles['gold-div']}>
                      <div className='title-card'>
                        <img
                          src={item?.img}
                        />
                        <div className="news-date">
                          <label className="mx-2"> 04/12/2023 </label>
                          <label className="news-date-time mx-2"> 10:01 <span >ص</span></label>
                        </div>
                      </div>
                      <div>
                        <h3 className='text-center fw-bold'>ذهب عيار 21</h3>
                        {/* <h4>{item.title}</h4> */}
                      </div>
                    </div>
                  </Link>
                ) : (null)
              ))}
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldStore
