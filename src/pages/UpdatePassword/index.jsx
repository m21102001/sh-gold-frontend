import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Navbar } from "@/layout";
import { ToastContainer, toast } from 'react-toastify';
import axios from "@/api/axios";
import { deleteCookie } from "cookies-next";
const UpdatePassword = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [resetCode, setResetCode] = useState('')

  const notify = () => toast.success("update password successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  // Submit the form data to the server
  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.put('/users/changeMyPassword', {
        password: resetCode,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setIsPending(false)
          console.log(response);
          deleteCookie('role')
          deleteCookie('token')
          navigate("/")
        })

    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
    }
  }

  return (
    <>
      {isPending && <div className="loading"></div>}
      <div className='login-page'>
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <form className='pb-5 pt-2' onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-5 fw-bold"
                  >   ادخل الرقم السري الجديد*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={resetCode}
                    onChange={e => setResetCode(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <ToastContainer />
                  <button onClick={notify} >تغيير الرقم السري</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePassword