import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';
import './GoldNews.scss'
import { courses } from '@/db/data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const GoldNews = () => {
  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'> اخبار الذهب</h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                // index < 8 ? (
                  <Link
                    key={index}
                    // to={`/gold-news/${item.id}`}
                    // state={{ item: item }}
                  >
                    <div className={styles['gold-div']}>
                      <div className='title-card'>
                        <LazyLoadImage
                          src={item?.img}
                        />
                        <div className="news-date">
                          <label className="mx-2"> 04/12/2023 </label>
                          <label className="news-date-time mx-2"> 10:01 <span >ص</span></label>
                        </div>
                      </div>
                      <div>
                        <h4>الذهب يتخلى عن مكاسبه خلال اليوم من أعلى مستوياته على الإطلاق نتيجة بعض عمليات جني</h4>
                        {/* <h4>{item.title}</h4> */}
                      </div>
                    </div>
                  </Link>
                // ) : (null)
              ))}
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldNews
