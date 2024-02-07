import { useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "@/api/axios"
import { useAuth } from "@/context/Auth";
const RequsetPaymentBook = () => {
  const navigate = useNavigate();
  const item = useLocation()?.search
  const { user } = useAuth();
  const [isPending, setIsPending] = useState(false)
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `books/pay-check/${item.slice(6)}`,
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
            return navigate('/book')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      // console.log('response' + err);
    }
  };
  return (
    <div className="d-flex " style={{ height: '100vh' }}>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">طلب عرض المنتج للبيع</h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-end">
              <h4>
                تهانينا تم شراء الكتاب بنجاح
              </h4>
              <p>فى حالة تم الشراء نسخة ورقية سيتم التواصل معك على الرقم التالى </p>
              <h5 className="text-danger">{user?.phone}</h5>
              <p className="text-danger">من فضلك احتفظ برسالة البريد الالكترونى لاستلام الكتاب من خلال رقم عملية الدفع</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={hanelSubmit} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> العودة للكتاب</button>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> تأكيد عمليه الدفع لفتح الكتاب </a>
    </ div>
  )
}

export default RequsetPaymentBook
