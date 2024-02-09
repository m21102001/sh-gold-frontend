import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "@/api/axios";
const MyWalletRequsetSall = () => {
  const navigate = useNavigate();
  const item = useLocation()?.state?.item
  const handelSubmit = async () => {
    try {
      await axios.post('gold-bars/sell/', {
        goldbarId: item?._id
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          // console.log(response);
          if (response?.status == 201) {
            alert('تم ارسال طلب للبيع')

          }
        })
    } catch (err) {
      console.log('response', err.response);
    }
  }
  return (
    <div className="d-flex " style={{ height: '100vh' }}>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">طلب عرض المنتج للبيع</h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-end fw-bold fs-3">
              {item?.title}
            </div>
            <div className="modal-body text-end">
              تم التأكيد من طلب البيع بنجاح
            </div>
            <div className="modal-footer">
              <Link to={'/auth/my-wallet'}>
              <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> تصفح محفظتك </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" onClick={handelSubmit} data-bs-toggle="modal" href="#exampleModalToggle" role="button">تأكيد الطلب</a>
    </div>

  )
}

export default MyWalletRequsetSall