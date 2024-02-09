import { useState } from "react"
import { Link, useLocation } from 'react-router-dom';
import axios from "@/api/axios"
const RequsetPaymentPlan = () => {
  const item = useLocation()?.search
  const [isPending, setIsPending] = useState(false)
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `users/pay/check-gold/${item.slice(6)}`, {
          withCredentials: false
        },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log('created success', response);
          if (response?.status == 201) {
            alert('created successfully')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response' + err);
    }
  };
  // console.log(item.slice(6));
  return (
    <div className="d-flex " style={{ height: '100vh' }}>
      {isPending && <div className="loading"></div>}
      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">طلب اشتراك فى الباقة الذهبية  </h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-end">
              تهانينا تم الاشتراك فى الخطة الذهبية بنجاح
            </div>
            <div className="modal-footer">
              <Link to={'/club'}>
              <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">تصفح باقى الاشتراكات </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" onClick={hanelSubmit} data-bs-toggle="modal" href="#exampleModalToggle" role="button"> تأكيد عمليه الدفع    </a>
    </div>
  )
}

export default RequsetPaymentPlan
