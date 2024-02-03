import { useState } from 'react';
import axios from '@/api/axios';
import { useAuth } from '@/context/Auth';
import { Link } from 'react-router-dom';

const ClubMembers = () => {
  const { user } = useAuth();
  console.log(user);
  const [loading, setLoading] = useState(false)
  const getInitialState = () => {
    const selectType = "online";
    return selectType;
  };
  const [type, setType] = useState(getInitialState);
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(`/consultation/free/?type=${type}`)
        .then((response) => {
          console.log(response);
          alert("sent successfully")
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('message', err.message);
    }
  };
  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'>حجز استشاره مجانيه  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-content-center'>
        {user?.plan == "silver" || user?.plan == "gold" ? (
          <form className="row g-3" onSubmit={hanelSubmit}>
            <h3 className='text-light text-center pb-5'>احجز استشارتك المجانيه </h3>
            <div className="label-form">تحديد نوع الحجز   *</div>
            <select
              className="form-select mb-4"
              aria-label="Default select example"
              value={type}
              onChange={handleChangeType}
            >
              <option selected value="online">هاتفيه</option>
              <option value="offline">حضوريه</option>
            </select>
            <div className="col-12">
              {!loading && (
                <button className='d-flex m-auto px-5 fs-4 send'>
                  حجز استشاره
                </button>
              )}
              {loading && (
                <button className='d-flex m-auto send' disabled>
                  جاري الحجز  ...
                </button>
              )}
            </div>
          </form>
        ) : (
          <div>
            <h3 className='text-light text-center pb-5'>احجز استشارتك المجانيه </h3>
            <p className='text-center text-light'>
              لحصول على خدمة استشارة مجانية، قم بالإشتراك في الباقه الفضيه او الباقه الذهبيه
            </p>
            <Link to={'/'} className='d-flex justify-content-center pt-4'>
            <button type="button" className='px-5'>اشترك الآن</button>
          </Link>
          </div>
        )}
    </div>
    </div >
  )
}

export default ClubMembers
