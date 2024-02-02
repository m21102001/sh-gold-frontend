import { useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "@/api/axios"
const RequsetPaymentPlaylist = () => {
  const navigate = useNavigate();
  const item = useLocation()?.search
  const [isPending, setIsPending] = useState(false)
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `/playlists/pay-check/${item.slice(6)}`,
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
            return navigate('/development')
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
    <>

      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">طلب شراء الكورس </h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              انت على بعد خطوه من شراء الكورس
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={hanelSubmit} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">تأكيد الدفع </button>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> تأكيد عمليه الدفع لفتح الكورس </a>
    </>
  )
}

export default RequsetPaymentPlaylist
