import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "@/layout"
import { ToastContainer, toast } from 'react-toastify';
import axios from '@/api/axios'

const VerifyRestCode = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [resetCode, setResetCode] = useState('')

  const notify = () =>
    toast.error(' تأكد من كتابة الكود بشكل صحيح', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  // Submit the form data to the server
  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.post('/auth/verifyResetCode', {
        resetCode: resetCode,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setIsPending(false)
          console.log(response);
          if (response?.status === 200) {
            navigate("/auth/resetPassword")
          }
        })

    } catch (err) {
      setIsPending(false);
      <ToastContainer />
      console.log('response', err.response);
      if (err?.response?.status === 200) {
        navigate("/auth/resetPassword")
      }
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
                  >  أدخل الكود*</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={resetCode}
                    required
                    onChange={e => setResetCode(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <ToastContainer />
                  <button onClick={notify}>ارسال</button>
                </div>
              </form>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold"> هل لديك حساب بالفعل ؟
                <Link
                  to={"/auth/login"}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: "pointer" }}
                > قم بتسجيل الدخول</Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default VerifyRestCode