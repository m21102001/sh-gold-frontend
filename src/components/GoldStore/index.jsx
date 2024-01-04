import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';

import axios from '@/api/axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const GoldStore = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([])

  const getInitialState = () => {
    const value = "Premium Products";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
      <div className="row align-items-start m-auto">
        <div className="col-md-3">
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={value}
            onChange={handleChange}
          >
            <option defaultValue selected value="selectAll">SelectAll</option>
            <option value="Premium Products">Premium Products</option>
            <option value="Othmani Lera and Georgian">Othmani Lera and Georgian</option>
            <option value="Mother Day">Mother Day</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
            <option value="PAMP Bullion">PAMP Bullion</option>
            <option value="Swiss Bar">Swiss Bar</option>
            <option value="White Gold">White Gold</option>
            <option value="Sabhat">Sabhat</option>
            <option value="Islamic">Islamic</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Sets">Sets</option>
            <option value="Rremium products">Rremium products</option>
          </select>
        </div>
        <div className="col-md-12">
          <div className='m-auto d-flex justify-center'>
            <>
              <div className="container">
                <div className={styles['home-grid']}>
                  {!loading && bookData?.document?.map((item, index) => (
                    item?.category == value && item?.category !== 'selectAll' ? (
                      <Link
                        key={index}
                        to={`/gold-news/${item._id}`}
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
                    ) : (
                      value == 'selectAll' ? (
                        <Link
                          key={index}
                          to={`/gold-news/${item._id}`}
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
                      ) : ('')
                    )
                  ))}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div >
  )
}

export default GoldStore