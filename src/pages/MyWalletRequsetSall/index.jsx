import { useLocation } from "react-router-dom";
import axios from "@/api/axios";
const MyWalletRequsetSall = () => {
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
          console.log(response);
        })
    } catch (err) {
      console.log('response', err.response);
    }
  }
  return (
    <>

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
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handelSubmit} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> الطلب</a>
    </>

  )
}

export default MyWalletRequsetSall