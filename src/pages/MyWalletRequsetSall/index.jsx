import { useLocation, useNavigate } from "react-router-dom";
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
          if (response?.status == 201) {
            alert('created successfully')
            return navigate('/')
          }
          console.log(response);
        })
    } catch (err) {
      console.log('response', err.response);
    }
  }
  return (
    <div className="d-flex " style={{height:'100vh'}}>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">طلب عرض المنتج للبيع</h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {item?.title}
            </div>
            <div className="modal-body">
              انت على بعد خطوه من تاكيد البيع
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handelSubmit} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> تاكيد </button>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" data-bs-toggle="modal" href="#exampleModalToggle" role="button">تأكيد الطلب</a>
    </div>

  )
}

export default MyWalletRequsetSall